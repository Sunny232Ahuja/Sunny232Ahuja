import Foundation

public struct SizeRecommendation {
    public let size: String
    public let confidence: Double
    public init(size: String, confidence: Double) {
        self.size = size
        self.confidence = confidence
    }
}

public protocol SizeAdvisorEngineProtocol {
    func recommend(height: Double, weight: Double, preference: String) -> SizeRecommendation
}

public final class SizeAdvisorEngine: SizeAdvisorEngineProtocol {
    public init() {}
    public func recommend(height: Double, weight: Double, preference: String) -> SizeRecommendation {
        let size = height > 170 ? "M" : "S"
        return SizeRecommendation(size: size, confidence: 0.5)
    }
}
