import XCTest
@testable import TryNowPDPKit

final class TryNowPDPKitTests: XCTestCase {
    func testButtonInit() {
        _ = TryOnButton(style: 0) { _ in }
    }
}
