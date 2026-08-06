/* =========================================================================
   DATA.JS — AKSHAYA ART GALLERY Catalog
   Structure: groups[] -> categories[] -> products[] -> media[]
   Traditional and contemporary artistry
   ========================================================================= */

const GALLERY_DATA = {
  groups: [
    {
      id: 1,
      name: "Paintings & Canvas",
      icon: "🎨",
      tagline: "Oil, watercolor, and acrylic masterpieces",
      description: "Explore our curated collection of fine paintings spanning traditional to contemporary styles. Each piece tells a unique story through color and form.",
      categories: [
        {
          id: 101,
          name: "Oil Paintings",
          icon: "🖼️",
          products: [
            {
              id: 1001,
              name: "Sunset Harmony",
              artist: "Madhavi Nair",
              info: "Oil on Canvas, 2023",
              description: "A breathtaking composition capturing the golden hour over serene backwaters. The interplay of warm oranges and deep purples creates a meditative atmosphere that invites contemplation.",
              specs: ["Oil on Canvas", "100cm × 140cm", "Framed", "Museum Quality"],
              media: [
                { type: "image", icon: "🎨", caption: "Full view", captionPosition: "footer" },
                { type: "image", icon: "🖼️", caption: "Detail: Brushwork", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Artist's process", captionPosition: "header" }
              ]
            },
            {
              id: 1002,
              name: "Monsoon Dreams",
              artist: "Rajesh Kumar",
              info: "Oil on Canvas, 2022",
              description: "Dynamic strokes capture the essence of Kerala's monsoon season. Dark clouds and dancing rain are rendered with passionate energy, evoking the spirit of nature's renewal.",
              specs: ["Oil on Canvas", "120cm × 90cm", "Framed", "Contemporary"],
              media: [
                { type: "image", icon: "🎨", caption: "Complete work", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Studio documentation", captionPosition: "header" }
              ]
            },
            {
              id: 1003,
              name: "Temple Bells",
              artist: "Kavya Menon",
              info: "Oil on Canvas, 2023",
              description: "An intimate portrayal of morning rituals at a historic temple. Soft diffused light illuminates sacred spaces, creating a sense of spiritual tranquility.",
              specs: ["Oil on Canvas", "80cm × 120cm", "Framed", "Spiritual Art"],
              media: [
                { type: "image", icon: "🎨", caption: "Main composition", captionPosition: "footer" },
                { type: "image", icon: "🖼️", caption: "Close-up details", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Light study", captionPosition: "header" }
              ]
            }
          ]
        },
        {
          id: 102,
          name: "Watercolor Landscapes",
          icon: "💧",
          products: [
            {
              id: 1011,
              name: "Backwater Reflections",
              artist: "Anjali Sharma",
              info: "Watercolor on Paper, 2023",
              description: "Luminous watercolor study of Kerala's enchanting backwaters. Transparent layers of pigment create an ethereal quality, capturing water's ever-changing nature.",
              specs: ["Watercolor on Paper", "70cm × 50cm", "Matted", "Landscape"],
              media: [
                { type: "image", icon: "💧", caption: "Complete painting", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Painting technique", captionPosition: "header" }
              ]
            },
            {
              id: 1012,
              name: "Misty Mountains",
              artist: "Vikram Singh",
              info: "Watercolor on Paper, 2022",
              description: "Serene mountain landscape rendered in cool blues and grays. The mist-laden peaks evoke a sense of peaceful isolation and spiritual contemplation.",
              specs: ["Watercolor on Paper", "60cm × 90cm", "Matted", "Nature"],
              media: [
                { type: "image", icon: "💧", caption: "Landscape view", captionPosition: "footer" },
                { type: "image", icon: "🏔️", caption: "Peak detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Creation video", captionPosition: "header" }
              ]
            }
          ]
        },
        {
          id: 103,
          name: "Abstract & Modern",
          icon: "✨",
          products: [
            {
              id: 1021,
              name: "Urban Rhythm",
              artist: "Priya Gupta",
              info: "Acrylic on Canvas, 2023",
              description: "Bold geometric forms and vibrant hues express the pulse of modern city life. This piece celebrates the energy, movement, and diversity of urban spaces.",
              specs: ["Acrylic on Canvas", "110cm × 110cm", "Framed", "Contemporary"],
              media: [
                { type: "image", icon: "✨", caption: "Full composition", captionPosition: "footer" },
                { type: "image", icon: "🎨", caption: "Color detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Creation process", captionPosition: "header" }
              ]
            },
            {
              id: 1022,
              name: "Meditation",
              artist: "Arjun Desai",
              info: "Mixed Media, 2023",
              description: "An introspective exploration of inner stillness. Layered textures and subtle color transitions create a contemplative space for the viewer's own reflection.",
              specs: ["Mixed Media", "100cm × 100cm", "Framed", "Spiritual"],
              media: [
                { type: "image", icon: "✨", caption: "Textured surface", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Material study", captionPosition: "header" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Sculptures & Carvings",
      icon: "🗿",
      tagline: "Stone, wood, and bronze expressions",
      description: "Witness the transformative power of sculptural art. From ancient traditions to contemporary installations, each piece demonstrates the artist's mastery over form and dimension.",
      categories: [
        {
          id: 201,
          name: "Stone Sculptures",
          icon: "🪨",
          products: [
            {
              id: 2001,
              name: "Divine Grace",
              artist: "Suresh Nambiar",
              info: "Granite Sculpture, 2022",
              description: "An exquisite hand-carved granite sculpture depicting a classical deity in a serene pose. The artist's meticulous work reveals the stone's natural beauty.",
              specs: ["Granite", "180cm Height", "Stone Base", "Sacred Art"],
              media: [
                { type: "image", icon: "🗿", caption: "Front view", captionPosition: "footer" },
                { type: "image", icon: "🗿", caption: "Profile view", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Detailed walkthrough", captionPosition: "header" }
              ]
            },
            {
              id: 2002,
              name: "Eternal Dance",
              artist: "Malini Chakraborty",
              info: "Marble Sculpture, 2023",
              description: "A dynamic marble sculpture capturing the graceful movement of classical dance. The flowing lines and elegant proportions celebrate the human form.",
              specs: ["Marble", "150cm Height", "Polished Finish", "Classical"],
              media: [
                { type: "image", icon: "🗿", caption: "Sculpture stance", captionPosition: "footer" },
                { type: "image", icon: "🗿", caption: "Carved details", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "360° view", captionPosition: "header" }
              ]
            }
          ]
        },
        {
          id: 202,
          name: "Wood Carvings",
          icon: "🪵",
          products: [
            {
              id: 2011,
              name: "Wooden Elephant",
              artist: "Kumaran Artisan",
              info: "Rosewood Carving, 2022",
              description: "Intricate rosewood carving of an elephant, featuring detailed tusks and ornamental blanket. A masterpiece of traditional craftsmanship passed through generations.",
              specs: ["Rosewood", "80cm Height", "Hand-Carved", "Traditional"],
              media: [
                { type: "image", icon: "🪵", caption: "Full sculpture", captionPosition: "footer" },
                { type: "image", icon: "🪶", caption: "Carving detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Artisan documentation", captionPosition: "header" }
              ]
            },
            {
              id: 2012,
              name: "Kerala Village",
              artist: "Pradeep Menon",
              info: "Teakwood Wall Panel, 2023",
              description: "A stunning teak wood relief panel depicting life in a traditional Kerala village. Every detail from architecture to daily activities is meticulously carved.",
              specs: ["Teakwood Panel", "120cm × 180cm", "Wall-Mount", "Heritage Art"],
              media: [
                { type: "image", icon: "🪵", caption: "Complete panel", captionPosition: "footer" },
                { type: "image", icon: "🏘️", caption: "Village details", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Carved narrative", captionPosition: "header" }
              ]
            }
          ]
        },
        {
          id: 203,
          name: "Bronze & Metal Works",
          icon: "🔶",
          products: [
            {
              id: 2021,
              name: "Brass Lamp",
              artist: "Vikram Metalworks",
              info: "Brass with Hand-Painted Shade, 2023",
              description: "An elegant decorative lamp combining traditional brass casting with contemporary design. The hand-painted silk shade diffuses warm, ambient light.",
              specs: ["Brass & Silk", "65cm Height", "Functional Art", "Modern Traditional"],
              media: [
                { type: "image", icon: "🔶", caption: "Lit display", captionPosition: "footer" },
                { type: "image", icon: "💡", caption: "Shade detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Product showcase", captionPosition: "header" }
              ]
            },
            {
              id: 2022,
              name: "Cosmic Journey",
              artist: "Arjun Bronze Studio",
              info: "Bronze Abstract Sculpture, 2023",
              description: "A contemporary bronze sculpture exploring themes of cosmic movement and transformation. The flowing forms suggest orbits and celestial pathways.",
              specs: ["Bronze", "120cm Height", "Dark Patina Finish", "Contemporary"],
              media: [
                { type: "image", icon: "🔶", caption: "Front perspective", captionPosition: "footer" },
                { type: "image", icon: "⭐", caption: "Abstract details", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Rotation view", captionPosition: "header" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Traditional Arts",
      icon: "🎭",
      tagline: "Kathakali, murals, and classical traditions",
      description: "Celebrate the rich heritage of Indian classical arts. These pieces represent centuries of artistic tradition and cultural storytelling.",
      categories: [
        {
          id: 301,
          name: "Kathakali & Dance Art",
          icon: "🎭",
          products: [
            {
              id: 3001,
              name: "Kathakali Heritage",
              artist: "Ramesh Kuttichira",
              info: "Acrylic on Canvas, 2022",
              description: "A vibrant portrayal of a Kathakali performer in full costume and makeup. The jewel-toned colors and dramatic expression capture the essence of this ancient art form.",
              specs: ["Acrylic on Canvas", "90cm × 120cm", "Framed", "Classical Arts"],
              media: [
                { type: "image", icon: "🎭", caption: "Full figure", captionPosition: "footer" },
                { type: "image", icon: "👤", caption: "Face makeup detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Performance art", captionPosition: "header" }
              ]
            },
            {
              id: 3002,
              name: "Traditional Dancer",
              artist: "Deepa Nair",
              info: "Oil on Canvas, 2023",
              description: "An elegant composition of a classical dancer in mid-performance. The movement and grace are rendered through dynamic lines and warm earth tones.",
              specs: ["Oil on Canvas", "85cm × 115cm", "Framed", "Performing Arts"],
              media: [
                { type: "image", icon: "🎭", caption: "Dancer in motion", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Artistic study", captionPosition: "header" }
              ]
            }
          ]
        },
        {
          id: 302,
          name: "Kerala Murals",
          icon: "🖌️",
          products: [
            {
              id: 3011,
              name: "Kerala Mural: Sacred Space",
              artist: "Rajesh Muralidharan",
              info: "Natural Pigments on Canvas, 2023",
              description: "Recreating the ancient Kerala mural tradition using natural pigments. This composition depicts sacred narratives with the spiritual depth of historical temple murals.",
              specs: ["Natural Pigments", "120cm × 180cm", "Mounted", "Heritage Technique"],
              media: [
                { type: "image", icon: "🖌️", caption: "Full mural", captionPosition: "footer" },
                { type: "image", icon: "🕉️", caption: "Sacred imagery", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Pigment technique", captionPosition: "header" }
              ]
            },
            {
              id: 3012,
              name: "Mythological Tales",
              artist: "Suma Prabhu",
              info: "Natural Pigments on Canvas, 2022",
              description: "An expansive mural composition depicting episodes from Hindu mythology. Each figure is rendered with the characteristic style of traditional Kerala murals.",
              specs: ["Natural Pigments", "140cm × 200cm", "Museum Mount", "Classical"],
              media: [
                { type: "image", icon: "🖌️", caption: "Epic narrative", captionPosition: "footer" },
                { type: "image", icon: "📖", caption: "Story details", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Restoration documentation", captionPosition: "header" }
              ]
            }
          ]
        },
        {
          id: 303,
          name: "Intricate Patterns",
          icon: "🎀",
          products: [
            {
              id: 3021,
              name: "Geometric Harmony",
              artist: "Lakshmi Artisan Collective",
              info: "Hand-Drawn Pattern Work, 2023",
              description: "A mesmerizing geometric pattern based on traditional Kerala architectural designs. Each line is drawn with precision to create perfect symmetry.",
              specs: ["Mixed Media", "100cm × 100cm", "Framed", "Pattern Art"],
              media: [
                { type: "image", icon: "🎀", caption: "Full pattern", captionPosition: "footer" },
                { type: "image", icon: "✨", caption: "Intricate detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Pattern zoom", captionPosition: "header" }
              ]
            },
            {
              id: 3022,
              name: "Kaleidoscopic Dreams",
              artist: "Asha Menon",
              info: "Digital Print with Hand Touch-up, 2023",
              description: "Contemporary interpretation of traditional Indian pattern work. Symmetrical mandala-like forms create a hypnotic, meditative visual experience.",
              specs: ["Hybrid Medium", "110cm × 110cm", "Gallery Wrap", "Modern Traditional"],
              media: [
                { type: "image", icon: "🎀", caption: "Symmetrical design", captionPosition: "footer" },
                { type: "image", icon: "🔮", caption: "Center medallion", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Pattern evolution", captionPosition: "header" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Contemporary Installations",
      icon: "🎪",
      tagline: "Modern expressions and experimental media",
      description: "Explore cutting-edge contemporary art that challenges perceptions and invites interactive engagement.",
      categories: [
        {
          id: 401,
          name: "Mixed Media Installations",
          icon: "📦",
          products: [
            {
              id: 4001,
              name: "Urban Fragments",
              artist: "Nikhil Desai",
              info: "Mixed Media Installation, 2023",
              description: "A thought-provoking installation combining recycled materials, found objects, and contemporary pigments. It critiques consumerism while celebrating transformation.",
              specs: ["Recycled Materials", "Variable Dimensions", "Interactive", "Social Commentary"],
              media: [
                { type: "image", icon: "📦", caption: "Installation view", captionPosition: "footer" },
                { type: "image", icon: "🔧", caption: "Material composition", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Interactive experience", captionPosition: "header" }
              ]
            },
            {
              id: 4002,
              name: "Digital Dreams",
              artist: "Sophia Chen & Collective",
              info: "Mixed Media with Digital Elements, 2023",
              description: "A immersive installation blending traditional textiles with digital projections. The work explores the intersection of heritage and technology.",
              specs: ["Textiles & Digital", "Large Scale", "Immersive", "Contemporary"],
              media: [
                { type: "image", icon: "📦", caption: "Installation space", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Projection sequence", captionPosition: "header" }
              ]
            }
          ]
        },
        {
          id: 402,
          name: "Fiber & Textile Art",
          icon: "🧵",
          products: [
            {
              id: 4011,
              name: "Woven Stories",
              artist: "Bindhu Vasu",
              info: "Hand-Woven Textile Art, 2023",
              description: "A stunning hand-woven composition using natural fibers and traditional weaving techniques. Each thread tells a story of heritage and skill.",
              specs: ["Natural Fibers", "150cm × 200cm", "Gallery Mount", "Textile Art"],
              media: [
                { type: "image", icon: "🧵", caption: "Full textile", captionPosition: "footer" },
                { type: "image", icon: "🌾", caption: "Weave detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Weaving process", captionPosition: "header" }
              ]
            },
            {
              id: 4012,
              name: "Chromatic Journey",
              artist: "Maya Krishnan",
              info: "Dyed Silk & Embroidery, 2023",
              description: "A luxurious piece combining hand-dyed silk with intricate embroidery work. The flowing colors and textured surface create depth and movement.",
              specs: ["Silk & Thread", "120cm × 180cm", "Framed", "Fiber Art"],
              media: [
                { type: "image", icon: "🧵", caption: "Complete work", captionPosition: "footer" },
                { type: "image", icon: "🧶", caption: "Embroidery detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Material texture", captionPosition: "header" }
              ]
            }
          ]
        }
      ]
    }
  ]
};