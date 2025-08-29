#if canImport(SwiftUI) && canImport(RealityKit) && canImport(ARKit)
import SwiftUI
import RealityKit
import ARKit

public struct FaceTryOnView: View {
    @StateObject private var viewModel = FaceTryOnViewModel()

    public init() {}

    public var body: some View {
        VStack {
            ARViewContainer(viewModel: viewModel)
            Text("Fit Confidence: \(viewModel.fitConfidence, specifier: "%.1f")")
        }
        .navigationTitle("Face Try-On")
    }
}

final class FaceTryOnViewModel: ObservableObject {
    @Published var fitConfidence: Double = 0.0
    let service: FaceTryOnService

    init(service: FaceTryOnService = MockFaceTryOnService()) {
        self.service = service
    }

    func start() {}
}

struct ARViewContainer: UIViewRepresentable {
    @ObservedObject var viewModel: FaceTryOnViewModel

    func makeUIView(context: Context) -> ARView {
        let arView = ARView(frame: .zero)
        let config = ARFaceTrackingConfiguration()
        arView.session.run(config)
        if let anchor = try? FaceEyewearScene.loadEyewear() {
            arView.scene.anchors.append(anchor)
        }
        return arView
    }

    func updateUIView(_ uiView: ARView, context: Context) {}
}

enum FaceEyewearScene {
    static func loadEyewear() throws -> AnchorEntity {
        AnchorEntity()
    }
}
#else
public struct FaceTryOnView {
    public init() {}
}
#endif
