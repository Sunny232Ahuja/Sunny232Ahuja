import XCTest
@testable import FaceTryOn

final class FaceTryOnTests: XCTestCase {
    func testMockStyles() async throws {
        let service = MockFaceTryOnService()
        let styles = await service.availableStyles()
        XCTAssertEqual(styles.first, "Default")
    }
}
