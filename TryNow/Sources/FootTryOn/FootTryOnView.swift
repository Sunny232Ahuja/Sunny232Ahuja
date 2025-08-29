#if canImport(SwiftUI) && canImport(Vision) && canImport(AVFoundation)
import SwiftUI
import Vision
import AVFoundation

public struct FootTryOnView: View {
    public init() {}
    public var body: some View {
        Text("Foot Try-On")
    }
}
#else
public struct FootTryOnView {
    public init() {}
}
#endif
