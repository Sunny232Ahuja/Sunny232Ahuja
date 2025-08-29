#if canImport(SwiftUI)
import SwiftUI
import Combine

public struct ConsentView: View {
    @AppStorage("onDeviceProcessing") private var onDevice = true
    public init() {}
    public var body: some View {
        Form {
            Toggle("Process on my device", isOn: $onDevice)
        }
        .navigationTitle("Privacy")
    }
}

public func eraseDataAction() {
    // Placeholder for clearing caches and keychain
}
#else
public struct ConsentView {
    public init() {}
}
public func eraseDataAction() {}
#endif
