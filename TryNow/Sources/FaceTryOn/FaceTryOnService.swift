import Foundation

public protocol FaceTryOnService {
    func availableStyles() async -> [String]
}

public struct MockFaceTryOnService: FaceTryOnService {
    public init() {}
    public func availableStyles() async -> [String] {
        ["Default"]
    }
}
