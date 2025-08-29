#if canImport(SwiftUI)
import SwiftUI
import FaceTryOn

public struct TryOnResult {
    public let timeSpent: TimeInterval
    public let variant: String
    public let snapshotURL: URL?
    public init(timeSpent: TimeInterval, variant: String, snapshotURL: URL?) {
        self.timeSpent = timeSpent
        self.variant = variant
        self.snapshotURL = snapshotURL
    }
}

public struct TryOnButton: View {
    let style: ButtonStyleType
    let onComplete: (TryOnResult) -> Void
    @State private var presented = false

    public enum ButtonStyleType {
        case filled
    }

    public init(style: ButtonStyleType = .filled, onComplete: @escaping (TryOnResult) -> Void) {
        self.style = style
        self.onComplete = onComplete
    }

    public var body: some View {
        Button("Try On") { presented = true }
            .sheet(isPresented: $presented) {
                FaceTryOnView()
                    .onDisappear {
                        let result = TryOnResult(timeSpent: 0, variant: "default", snapshotURL: nil)
                        onComplete(result)
                    }
            }
    }
}
#else
public struct TryOnButton {
    public init(style: Int = 0, onComplete: @escaping (Any) -> Void) {}
}
#endif
