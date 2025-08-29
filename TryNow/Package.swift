// swift-tools-version: 6.1
import PackageDescription

let package = Package(
    name: "TryNow",
    platforms: [
        .iOS(.v17)
    ],
    products: [
        .library(name: "FaceTryOn", targets: ["FaceTryOn"]),
        .library(name: "FootTryOn", targets: ["FootTryOn"]),
        .library(name: "SizeAdvisor", targets: ["SizeAdvisor"]),
        .library(name: "CatalogModelSwap", targets: ["CatalogModelSwap"]),
        .library(name: "Analytics", targets: ["Analytics"]),
        .library(name: "Privacy", targets: ["Privacy"]),
        .library(name: "TryNowPDPKit", targets: ["TryNowPDPKit"]),
        .executable(name: "TryNowApp", targets: ["TryNowApp"])
    ],
    targets: [
        .target(name: "FaceTryOn"),
        .testTarget(name: "FaceTryOnTests", dependencies: ["FaceTryOn"]),
        .target(name: "FootTryOn"),
        .testTarget(name: "FootTryOnTests", dependencies: ["FootTryOn"]),
        .target(name: "SizeAdvisor"),
        .testTarget(name: "SizeAdvisorTests", dependencies: ["SizeAdvisor"]),
        .target(name: "CatalogModelSwap"),
        .testTarget(name: "CatalogModelSwapTests", dependencies: ["CatalogModelSwap"]),
        .target(name: "Analytics"),
        .target(name: "Privacy"),
        .target(name: "TryNowPDPKit", dependencies: ["FaceTryOn"]),
        .testTarget(name: "TryNowPDPKitTests", dependencies: ["TryNowPDPKit"]),
        .executableTarget(
            name: "TryNowApp",
            dependencies: ["FaceTryOn", "FootTryOn", "SizeAdvisor", "CatalogModelSwap", "Analytics", "Privacy"]
        ),
        .testTarget(name: "TryNowAppTests", dependencies: ["TryNowApp"])
    ]
)
