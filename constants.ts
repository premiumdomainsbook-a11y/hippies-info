import { Domain, Article } from './types';

export const CONTACT_EMAIL = "premiumdomainsbook@gmail.com";

export const DOMAIN_LIST: Domain[] = [
  { id: '1', name: 'BabySitter.WS', price: 3600, formattedPrice: '$3,600.00', link: 'http://BabySitter.WS', category: 'Business' },
  { id: '2', name: 'CristianoRronaldo.Club', price: 3600, formattedPrice: '$3,600.00', link: 'http://CristianoRronaldo.Club', category: 'Lifestyle' },
  { id: '3', name: 'DogeCoin.Gold', price: 2999, formattedPrice: '$2,999.00', link: 'http://DogeCoin.Gold', category: 'Crypto', featured: true },
  { id: '4', name: 'DomainFlipping.Space', price: 1200, formattedPrice: '$1,200.00', link: 'http://DomainFlipping.Space', category: 'Business' },
  { id: '5', name: 'DubaiRealestate.Today', price: 9800, formattedPrice: '$9,800.00', link: 'http://DubaiRealestate.Today', category: 'Geo', featured: true },
  { id: '6', name: 'GGC.Global', price: 1299, formattedPrice: '$1,299.00', link: 'http://GGC.Global', category: 'Business' },
  { id: '7', name: 'Groceries.Services', price: 1399, formattedPrice: '$1,399.00', link: 'http://Groceries.Services', category: 'Business' },
  { id: '8', name: 'HollywoodVibes.Info', price: 1699, formattedPrice: '$1,699.00', link: 'http://HollywoodVibes.Info', category: 'Lifestyle' },
  { id: '9', name: 'HomeTrades.Site', price: 560, formattedPrice: '$560.00', link: 'http://HomeTrades.Site', category: 'Business' },
  { id: '10', name: 'KamaSutra.Live', price: 720, formattedPrice: '$720.00', link: 'http://KamaSutra.Live', category: 'Lifestyle' },
  { id: '11', name: 'KSA.Autos', price: 18000, formattedPrice: '$18,000.00', link: 'http://KSA.Autos', category: 'Geo' },
  { id: '12', name: 'MagicCity.Online', price: 690, formattedPrice: '$690.00', link: 'http://MagicCity.Online', category: 'Geo' },
  { id: '13', name: 'MyKSA.Shop', price: 2199, formattedPrice: '$2,199.00', link: 'http://MyKSA.Shop', category: 'Geo' },
  { id: '14', name: 'NYC.Farm', price: 6999, formattedPrice: '$6,999.00', link: 'http://NYC.Farm', category: 'Geo', featured: true },
  { id: '15', name: 'NYCHub.Info', price: 16400, formattedPrice: '$16,400.00', link: 'http://NYCHub.Info', category: 'Geo' },
  { id: '16', name: 'Olympia.Ltd', price: 6800, formattedPrice: '$6,800.00', link: 'http://Olympia.Ltd', category: 'Business' },
  { id: '17', name: 'OnlineCasinos.WS', price: 7999, formattedPrice: '$7,999.00', link: 'http://OnlineCasinos.WS', category: 'Business' },
  { id: '18', name: 'Parisian.Boutique', price: 26500, formattedPrice: '$26,500.00', link: 'http://Parisian.Boutique', category: 'Lifestyle' },
  { id: '19', name: 'PremiumDomainsBook.Com', price: 3200, formattedPrice: '$3,200.00', link: 'http://PremiumDomainsBook.Com', category: 'Business' },
  { id: '20', name: 'ProteinShakes.Fit', price: 8500, formattedPrice: '$8,500.00', link: 'http://ProteinShakes.Fit', category: 'Lifestyle', featured: true },
  { id: '21', name: 'Quantumina.XYZ', price: 2999, formattedPrice: '$2,999.00', link: 'http://Quantumina.XYZ', category: 'Crypto' },
  { id: '22', name: 'TheBigApple.Life', price: 2890, formattedPrice: '$2,890.00', link: 'http://TheBigApple.Life', category: 'Geo' },
  { id: '23', name: 'TopTravelAdvisor.Info', price: 12500, formattedPrice: '$12,500.00', link: 'http://TopTravelAdvisor.Info', category: 'Business' },
  { id: '24', name: 'UrbanKeys.US', price: 7999, formattedPrice: '$7,999.00', link: 'http://UrbanKeys.US', category: 'Geo' },
  { id: '25', name: 'UrbanKeys.Online', price: 2650, formattedPrice: '$2,650.00', link: 'http://UrbanKeys.Online', category: 'Geo' }
];

export const ARTICLES: Article[] = [
  {
    id: "digital-nomad-freedom",
    title: "The Modern Hippie: Digital Nomads & Van Life",
    summary: "How the counterculture spirit has evolved into location independence and digital entrepreneurship.",
    content: "The spirit of the 1960s wasn't just about music and festivals; it was about freedom. Today, that freedom is realized through the Digital Nomad lifestyle. Modern hippies are trading stationary homes for vans and remote work. To sustain this lifestyle, owning the right digital real estate is crucial. Domains like 'TopTravelAdvisor.Info' or 'MagicCity.Online' are perfect entry points for nomads looking to build travel blogs or local guides. The revolution is no longer just televised; it's digitized and decentralized.",
    keywords: ["digital nomad", "van life", "location independence", "modern hippie", "remote work"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    date: "Oct 12, 2023"
  },
  {
    id: "sustainable-urban-living",
    title: "Eco-Consciousness: From Communes to Urban Farms",
    summary: "Sustainability is the new revolution. How green tech and urban farming are changing city landscapes.",
    content: "The original hippie movement championed the earth. Today, that mission is critical. We see a massive surge in Urban Farming and sustainable city living. New York City, a concrete jungle, is seeing a green renaissance. Assets like 'NYC.Farm' represent the intersection of high-value real estate and high-value ethics. Building a brand around sustainability isn't just good karma; it's smart business. Whether it's organic delivery via 'Groceries.Services' or eco-tourism, the green economy is blooming.",
    keywords: ["sustainability", "urban farming", "nyc farm", "green economy", "eco-friendly"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    date: "Nov 05, 2023"
  },
  {
    id: "crypto-counterculture",
    title: "Crypto: The Financial Counterculture",
    summary: "Why cryptocurrency and decentralized finance (DeFi) are the ultimate expression of anti-establishment freedom.",
    content: "If the hippies of the 60s wanted to break free from the establishment, the crypto enthusiasts of today are doing it with code. Decentralization is the new protest. Currencies like Dogecoin started as jokes but became symbols of community power. A domain like 'DogeCoin.Gold' captures this zeitgeist perfectly. It represents a shift away from traditional banking towards a peer-to-peer future. Investing in blockchain domains like 'Quantumina.XYZ' is akin to buying land in a new, free world.",
    keywords: ["crypto", "dogecoin", "defi", "financial freedom", "blockchain"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    date: "Dec 15, 2023"
  },
  {
    id: "bohemian-fashion-tech",
    title: "Bohemian Style in the Digital Age",
    summary: "Timeless fashion meets modern e-commerce. The enduring appeal of the boho aesthetic.",
    content: "Bohemian fashion—flowing fabrics, artistic patterns, and vintage vibes—never goes out of style. However, the marketplace has moved online. High-end fashion domains like 'Parisian.Boutique' offer a digital runway for brands that blend luxury with the free-spirited hippie aesthetic. Today's boutique owner doesn't need a physical storefront in Paris; they need a powerful digital identity that conveys elegance and freedom globally.",
    keywords: ["bohemian fashion", "boho style", "parisian boutique", "ecommerce", "fashion tech"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    date: "Jan 20, 2024"
  },
  {
    id: "holistic-health-online",
    title: "The Wellness Revolution: Mind, Body, & URL",
    summary: "Bringing holistic health, yoga, and fitness to a global audience.",
    content: "The hippie movement introduced the West to yoga, meditation, and holistic health. Now, the 'Wellness' industry is a trillion-dollar global giant. From 'ProteinShakes.Fit' for the body to mindfulness apps for the soul, health is digital. Entrepreneurs can leverage specific domains to sell supplements, courses, or coaching. The modern guru uses the internet to spread vibrations of health and positivity.",
    keywords: ["holistic health", "yoga", "wellness", "fitness domain", "organic living"],
    imageUrl: "https://picsum.photos/800/600?random=5",
    date: "Feb 10, 2024"
  }
];