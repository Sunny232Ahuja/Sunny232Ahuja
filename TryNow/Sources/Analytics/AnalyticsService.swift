import Foundation

public protocol AnalyticsEvent {
    var name: String { get }
    var parameters: [String: String] { get }
}

public protocol AnalyticsService {
    func log(_ event: AnalyticsEvent)
}

public struct ConsoleAnalyticsService: AnalyticsService {
    public init() {}
    public func log(_ event: AnalyticsEvent) {
        print("\(event.name): \(event.parameters)")
    }
}
