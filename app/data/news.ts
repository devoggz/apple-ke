export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  publisher: string;
  datePosted: string;
  category: "iPhone" | "Mac" | "iPad" | "Software" | "Accessories" | "General";
  readTime: number; // in minutes
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "iphone-16-pro-titanium-design",
    title: "iPhone 16 Pro Introduces Revolutionary Titanium Grade 5 Design",
    subtitle:
      "Apple's latest flagship brings aerospace-grade materials to smartphones",
    description:
      "Apple has unveiled the iPhone 16 Pro with an all-new titanium design using Grade 5 aerospace alloy. The new construction makes the device 10% lighter than its predecessor while maintaining exceptional durability. The natural titanium finish showcases a brushed texture that's both elegant and functional, reducing fingerprints. Early reviews praise the premium feel and improved thermal management, with the titanium chassis dissipating heat 15% more efficiently than previous stainless steel models. The device also features contoured edges that make it more comfortable to hold despite the larger 6.3-inch display.",
    image: "/images/iphone-17-pro.webp",
    publisher: "TechCrunch",
    datePosted: "2026-01-20",
    category: "iPhone",
    readTime: 5,
  },
  {
    id: "2",
    slug: "macos-sequoia-ai-features",
    title: "macOS Sequoia Brings Groundbreaking AI Integration",
    subtitle:
      "New operating system transforms productivity with intelligent features",
    description:
      "Apple's macOS Sequoia represents a massive leap forward in AI-powered computing. The update introduces an intelligent writing assistant that works system-wide, helping users craft emails, documents, and code with unprecedented accuracy. The new Smart Finder uses machine learning to predict which files you need before you search for them, learning from your work patterns. Safari gains AI-powered summarization tools that can distill lengthy articles into key points. Perhaps most impressive is the Universal Translation feature that works offline, translating text in any app in real-time across 40 languages. Privacy remains paramount, with all AI processing happening on-device using the Neural Engine.",
    image: "/Mac.png",
    publisher: "The Verge",
    datePosted: "2026-01-18",
    category: "Software",
    readTime: 7,
  },
  {
    id: "3",
    slug: "macbook-air-m4-performance",
    title: "M4 MacBook Air Delivers Desktop-Class Performance",
    subtitle: "Apple's thinnest laptop now rivals high-end workstations",
    description:
      "The new MacBook Air with M4 chip redefines what's possible in an ultra-portable laptop. Benchmarks show the base model outperforming many desktop workstations from just two years ago. The M4 chip features a 12-core CPU and 16-core GPU, delivering a 40% performance boost over the M2 generation. Video editors can now work with multiple 8K ProRes streams without breaking a sweat. The device maintains its fanless design while under heavy load, thanks to advanced thermal architecture. Battery life reaches an unprecedented 22 hours of web browsing, and the laptop can now drive two 6K external displays simultaneously. All this power comes in a chassis that weighs just 2.7 pounds.",
    image: "/Macbook-laptop.png",
    publisher: "MacRumors",
    datePosted: "2026-01-15",
    category: "Mac",
    readTime: 6,
  },
  {
    id: "4",
    slug: "airpods-pro-3-health-features",
    title: "AirPods Pro 3 Transform Personal Health Monitoring",
    subtitle:
      "Next-generation earbuds include advanced hearing and health sensors",
    description:
      "Apple's AirPods Pro 3 blur the line between audio device and health monitor. The new model includes clinical-grade hearing test capabilities, approved by the FDA for over-the-counter hearing aid functionality. Advanced sensors can now measure heart rate through the ear canal with accuracy comparable to chest-worn monitors. The spatial audio experience has been enhanced with personalized HRTF (Head-Related Transfer Function) profiles created using the iPhone's TrueDepth camera. Active Noise Cancellation now adapts in real-time to your environment, with conversation awareness that automatically adjusts when you start speaking. Battery life extends to 7 hours with ANC enabled, and the new USB-C case supports wireless charging at 15W.",
    image: "/watch.png",
    publisher: "9to5Mac",
    datePosted: "2026-01-12",
    category: "Accessories",
    readTime: 8,
  },
  {
    id: "5",
    slug: "ipad-pro-oled-display",
    title: "iPad Pro OLED Display Sets New Standard for Color Accuracy",
    subtitle:
      "Tandem OLED technology delivers unprecedented brightness and efficiency",
    description:
      "The latest iPad Pro features Apple's revolutionary Tandem OLED display, stacking two OLED panels for extraordinary performance. The display achieves 1600 nits of sustained brightness—double the previous generation—while consuming 30% less power. Professional colorists are celebrating the panel's 100% coverage of the DCI-P3 color space and Delta E < 1 color accuracy out of the box. The new iPad Pro also introduces ProMotion 2.0 with adaptive refresh rates from 1Hz to 120Hz, dramatically improving battery life during static content viewing. The display supports HDR10+ and Dolby Vision, making it an exceptional tool for both content creation and consumption. At just 5.1mm thick, it's the thinnest device Apple has ever made.",
    image: "/ipad-pro.png",
    publisher: "Engadget",
    datePosted: "2026-01-08",
    category: "iPad",
    readTime: 6,
  },
  {
    id: "6",
    slug: "apple-vision-pro-apps",
    title: "Vision Pro App Ecosystem Surpasses 10,000 Native Applications",
    subtitle: "Spatial computing platform sees explosive developer adoption",
    description:
      "Just six months after launch, Apple Vision Pro's app ecosystem has exploded to over 10,000 native visionOS applications. Major creative tools like Adobe Photoshop, Final Cut Pro, and Blender now offer fully spatial interfaces that transform professional workflows. Medical applications are emerging as a killer use case, with surgical planning apps using 3D patient scans for pre-operative visualization. Education apps create immersive learning experiences, from virtual chemistry labs to historical recreations. Gaming on Vision Pro has evolved beyond expectations, with titles offering unprecedented immersion through eye tracking and hand gestures. Developers praise visionOS's SwiftUI integration, making it straightforward to adapt existing apps for spatial computing. The platform's success suggests spatial computing is transitioning from novelty to necessity.",
    image: "/images/iphone-17.webp",
    publisher: "Ars Technica",
    datePosted: "2026-01-05",
    category: "General",
    readTime: 9,
  },
];
