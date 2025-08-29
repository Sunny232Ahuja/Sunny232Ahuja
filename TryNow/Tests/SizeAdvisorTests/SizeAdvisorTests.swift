import XCTest
@testable import SizeAdvisor

final class SizeAdvisorTests: XCTestCase {
    func testRecommendation() {
        let engine = SizeAdvisorEngine()
        let result = engine.recommend(height: 180, weight: 75, preference: "Regular")
        XCTAssertEqual(result.size, "M")
    }
}
