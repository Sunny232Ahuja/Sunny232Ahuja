import Foundation

#if canImport(UIKit)
import UIKit

public protocol ModelSwapProvider {
    func generateComposite(modelImage: UIImage, garmentMask: CGImage) async -> UIImage
}

public final class MockModelSwapProvider: ModelSwapProvider {
    public init() {}
    public func generateComposite(modelImage: UIImage, garmentMask: CGImage) async -> UIImage {
        modelImage
    }
}
#else
public protocol ModelSwapProvider {}
public final class MockModelSwapProvider: ModelSwapProvider {
    public init() {}
}
#endif
