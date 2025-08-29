#if canImport(SwiftUI)
import SwiftUI
import FaceTryOn
import FootTryOn
import SizeAdvisor
import Privacy

@main
public struct TryNowApp: App {
    public init() {}
    public var body: some Scene {
        WindowGroup {
            HomeView()
        }
    }
}

struct HomeView: View {
    var body: some View {
        NavigationStack {
            List {
                NavigationLink("Face Try-On") { FaceTryOnView() }
                NavigationLink("Footwear Try-On") { FootTryOnView() }
                NavigationLink("Size Advisor") { SizeAdvisorView() }
                NavigationLink("Privacy") { ConsentView() }
            }
            .navigationTitle("TryNow")
        }
    }
}
#else
public struct TryNowApp {}
@main
public enum TryNowAppMain {
    public static func main() {}
}
#endif
