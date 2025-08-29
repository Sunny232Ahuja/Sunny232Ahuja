#if canImport(SwiftUI)
import SwiftUI

public struct SizeAdvisorView: View {
    @State private var height: String = ""
    @State private var weight: String = ""
    @State private var preference: String = "Regular"
    @State private var result: SizeRecommendation?

    let engine: SizeAdvisorEngineProtocol

    public init(engine: SizeAdvisorEngineProtocol = SizeAdvisorEngine()) {
        self.engine = engine
    }

    public var body: some View {
        Form {
            TextField("Height (cm)", text: $height)
                .keyboardType(.decimalPad)
            TextField("Weight (kg)", text: $weight)
                .keyboardType(.decimalPad)
            Picker("Fit", selection: $preference) {
                Text("Slim").tag("Slim")
                Text("Regular").tag("Regular")
            }
            Button("Recommend") {
                let h = Double(height) ?? 0
                let w = Double(weight) ?? 0
                result = engine.recommend(height: h, weight: w, preference: preference)
            }
            if let result {
                Text("Size: \(result.size) ±\(String(format: "%.1f", result.confidence))")
            }
        }
        .navigationTitle("Size Advisor")
    }
}
#else
public struct SizeAdvisorView {
    public init(engine: SizeAdvisorEngineProtocol = SizeAdvisorEngine()) {}
}
#endif
