/* =========================================================================
   DATA.JS — AKSHAYA ART GALLERY Catalog
   Structure: groups[] -> categories[] -> products[] -> media[]
   Traditional and contemporary artistry
   
   CATEGORIES BASED ON UPLOADED IMAGES:
   - Kerala Mural Art
   - Traditional Pichwai Paintings
   - Handcrafted Sculptures
   - Decorated Vessels & Pots
   - Textile & Embroidery Art
   - Home Decor Accessories
   ========================================================================= */

const GALLERY_DATA = {
  groups: [
    {
      id: 1,
      name: "Kerala Mural Art",
      icon: "🎨",
      photo: "static/img/image8.jpg",
      tagline: "Traditional Kerala murals and Kathakali-inspired paintings",
      description: "Experience the rich heritage of Kerala's ancient mural tradition. Our collection showcases traditional narratives rendered with natural pigments and authentic techniques, celebrating divine stories and mythological tales.",
      color: "#8B4513",
      categories: [
        {
          id: 101,
          name: "Traditional Kathakali Paintings",
          icon: "🎭",
          description: "Classical Kerala mural style depicting divine and mythological characters",
          products: [
            {
              id: 1001,
              name: "Radha-Krishna Divine Dance",
              artist: "Master Artisan Collective, Kerala",
              info: "Natural Pigments on Canvas, Traditional Technique",
              description: "A vibrant Kathakali-inspired composition featuring Lord Krishna with divine consort Radha. Rich greens, oranges, and reds characteristic of Kerala murals dominate this piece. Traditional dot-painting (pointillism) details adorned with ornamental patterns and gold leaf accents.",
              specs: ["Natural Pigments", "100cm × 140cm", "Gallery Mount", "Museum Quality"],
              origin: "Kerala, South India",
              media: [
                { type: "image", icon: "🎨", src: "static/img/image.png", caption: "Main composition", captionPosition: "footer" },
                { type: "image", icon: "🎭", caption: "Detail: Facial expressions & ornaments", captionPosition: "footer" },
                { type: "video", icon: "🎬", src: "https://www.facebook.com/reel/1263187195895567/", caption: "Artist's Process", captionPosition: "header" }
              ]
            },
            {
              id: 1002,
              name: "Divine Vishnu - Cosmic Form",
              artist: "Traditional Kerala Master",
              info: "Natural Pigments on Canvas, 2023",
              description: "Depicts Lord Vishnu in his cosmic manifestation with elaborate headdress and divine weapons. The ornate crown with peacock motifs and celestial aura showcase traditional Kerala mural iconography.",
              specs: ["Natural Pigments", "120cm × 150cm", "Professional Mount", "Heritage Art"],
              origin: "Kerala, South India",
              media: [
                { type: "image", icon: "🎨", src: "static/img/image2.jpg", caption: "Full composition", captionPosition: "footer" },
                { type: "image", icon: "👑", caption: "Ornate crown detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", src: "https://www.facebook.com/reel/1255181889364326/", caption: "Creative Process", captionPosition: "header" }
              ]
            },
            {
              id: 1003,
              name: "Kathakali Performer - Green Face",
              artist: "Heritage Kerala Artisans",
              info: "Natural Pigments & Traditional Medium",
              description: "Classical Kathakali character with signature green face paint. Intricate costume details with red and gold embroidery patterns, traditional crown, and ornamental jewelry showcase the complexity of Kerala's theatrical tradition.",
              specs: ["Traditional Medium", "90cm × 130cm", "Canvas Mount", "Authentic Technique"],
              origin: "Kerala, South India",
              media: [
                { type: "image", icon: "🎭", src: "static/img/image.png", caption: "Character study", captionPosition: "footer" },
                { type: "image", icon: "💚", caption: "Green face detail", captionPosition: "footer" }
              ]
            }
          ]
        },
        {
          id: 102,
          name: "Pichwai Traditional Paintings",
          icon: "🕉️",
          description: "Sacred narrative paintings depicting mythological stories",
          products: [
            {
              id: 1011,
              name: "Pichwai: Divine Narrative",
              artist: "Traditional Indian Master Artist",
              info: "Natural Pigments on Canvas, Heritage Technique",
              description: "A grand pichwai composition featuring multiple divine characters in a complex narrative scene. The traditional hierarchical composition with celestial beings, devotees, and sacred symbols is rendered with vibrant reds, greens, and golds against an ornate patterned background.",
              specs: ["Natural Pigments", "140cm × 200cm", "Museum Grade Mount", "Heritage Masterpiece"],
              origin: "Rajasthan/Mathura Tradition",
              media: [
                { type: "image", icon: "🕉️", src: "static/img/image3.jpg", caption: "Complete narrative", captionPosition: "footer" },
                { type: "image", icon: "✨", caption: "Celestial beings detail", captionPosition: "footer" },
                { type: "video", icon: "🎬", caption: "Artistic documentation", captionPosition: "header" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Handcrafted Sculptures & Carvings",
      icon: "🗿",
      photo: "static/img/sculptures-cover.png",
      tagline: "Intricate wood carvings and decorative sculptures",
      description: "Discover the artistry of traditional Indian sculpture. From divine figurines to nature-inspired wooden carvings, each piece showcases exceptional craftsmanship and attention to detail.",
      color: "#654321",
      categories: [
        {
          id: 201,
          name: "Krishna Figurines",
          icon: "💙",
          description: "Divine Krishna sculptures with ornate decorations",
          products: [
            {
              id: 2001,
              name: "Krishna with Peacock Crown",
              artist: "Master Sculptor, Indian Artisans",
              info: "Hand-Painted Wood & Precious Gems, Mixed Technique",
              description: "An exquisite Krishna figurine with blue-painted complexion, adorned with a golden crown topped with a real peacock feather. The deity holds a flute (bansuri) and wears ornamental jewelry - pearl necklaces, bangles, and jeweled crown. Red and yellow silks form the divine attire. Each embellishment is hand-applied with semi-precious stones.",
              specs: ["Wood Base", "Hand-Painted", "Peacock Feather Crown", "Precious Stones", "Height: 35cm"],
              origin: "South India",
              media: [
                { type: "image", icon: "💙", src: "static/img/image4.jpg", caption: "Complete figurine", captionPosition: "footer" },
                { type: "image", icon: "👑", caption: "Ornate crown & feather", captionPosition: "footer" },
                { type: "image", icon: "✨", caption: "Jewelry details", captionPosition: "footer" }
              ]
            }
          ]
        },
        {
          id: 202,
          name: "Wooden Hand-Carved Art",
          icon: "🦉",
          description: "Intricate wooden sculptures of animals and nature motifs",
          products: [
            {
              id: 2011,
              name: "Wise Owl Carved Bottle",
              artist: "Traditional Wood Carver",
              info: "Hand-Carved Wood, Mixed Media",
              description: "A charming dark wooden bottle transformed into a wise owl sculpture. The piece features a carved owl face with golden painted eyes and intricate leaf details in green and natural wood tones. A rope vine spirals around the bottle, creating an organic, nature-inspired composition. Perfect as a decorative accent or functional bottle.",
              specs: ["Hand-Carved Wood", "Mixed Paint", "Rope Detailing", "Height: 25cm", "Decorative/Functional"],
              origin: "South India",
              media: [
                { type: "image", icon: "🦉", src: "static/img/image5.jpg", caption: "Full sculpture", captionPosition: "footer" },
                { type: "image", icon: "👀", caption: "Owl face detail", captionPosition: "footer" },
                { type: "image", icon: "🍃", caption: "Leaf carving detail", captionPosition: "footer" }
              ]
            },
            {
              id: 2012,
              name: "Grapevine Wrapped Bottle Art",
              artist: "Master Wood Artist",
              info: "Terracotta & Hand-Painted Wood",
              description: "A terracotta bottle wrapped with sculpted grapevine elements. Realistic purple grapes cluster around the neck, with green carved leaves detailed throughout. The warm terracotta base contrasts beautifully with the vibrant painted accents. A stunning piece that celebrates harvest and natural abundance.",
              specs: ["Terracotta Base", "Sculpted Grapes", "Painted Leaves", "Height: 28cm", "Wall Mountable"],
              origin: "South India",
              media: [
                { type: "image", icon: "🍇", src: "static/img/image6.jpg", caption: "Complete bottle art", captionPosition: "footer" },
                { type: "image", icon: "🍃", caption: "Grape cluster detail", captionPosition: "footer" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Decorated Vessels & Pottery",
      icon: "🏺",
      photo: "static/img/pottery-cover.png",
      tagline: "Hand-painted pots, bowls, and decorative containers",
      description: "Traditional and contemporary pottery featuring intricate hand-painted designs. Each vessel is a functional artwork celebrating Indian cultural motifs and artistic heritage.",
      color: "#B8860B",
      categories: [
        {
          id: 301,
          name: "Dot-Painted Decorative Boxes",
          icon: "📦",
          description: "Black vessels with traditional dot-painting (mandala) techniques",
          products: [
            {
              id: 3001,
              name: "Kathakali Mask - Dot Painted Box",
              artist: "Indian Dot-Painting Master",
              info: "Hand-Painted Terracotta, Traditional Technique",
              description: "A striking decorative bottle with a bold Kathakali mask face painted in traditional dot-painting style. The vibrant red face with white, orange, and gold dots creates intricate patterns. Concentric circular dot patterns (typical of Warli or dot-painting art) form the theatrical headdress and facial features. Perfect as a conversation piece or sacred art display.",
              specs: ["Terracotta", "Hand-Painted Dots", "Black Base", "Height: 30cm", "Decorative Vessel"],
              origin: "South India - Traditional Technique",
              media: [
                { type: "image", icon: "🎭", src: "static/img/image7.jpg", caption: "Mask face design", captionPosition: "footer" },
                { type: "image", icon: "⭕", caption: "Dot pattern detail", captionPosition: "footer" }
              ]
            },
            {
              id: 3002,
              name: "Mandala Box - Colorful Dot Art",
              artist: "Contemporary Dot-Painting Artist",
              info: "Hand-Painted Box, Mixed Media",
              description: "A beautiful black dome-shaped box adorned with traditional mandala-inspired dot painting. Vibrant dots in yellow, orange, white, pink, and green create intricate geometric and circular patterns across the lid and body. The detailed dot-work reveals mathematical precision and artistic harmony.",
              specs: ["Black Wood/Material Base", "Colorful Dots", "Dome Lid", "Diameter: 25cm", "Storage Box"],
              origin: "India",
              media: [
                { type: "image", icon: "⭕", src: "static/img/image15.jpg", caption: "Complete mandala design", captionPosition: "footer" },
                { type: "image", icon: "🎨", caption: "Color dot detail", captionPosition: "footer" }
              ]
            }
          ]
        },
        {
          id: 302,
          name: "Hand-Painted Flower Pots",
          icon: "🌸",
          description: "Vibrant painted terracotta pots with floral and nature designs",
          products: [
            {
              id: 3011,
              name: "Yellow Tribal Pattern Pot",
              artist: "Tribal Art Collective",
              info: "Hand-Painted Terracotta",
              description: "A cheerful yellow terracotta pot featuring tribal-inspired patterns. Blue fern-leaf designs and geometric triangle borders at the rim create a striking contrast. Traditional motifs celebrate nature and indigenous art traditions. Ideal for indoor plants or decorative display.",
              specs: ["Terracotta", "Hand-Painted", "Yellow Base", "Blue Patterns", "Diameter: 15cm"],
              origin: "South India",
              media: [
                { type: "image", icon: "🌼", src: "static/img/image11.jpg", caption: "Full pot design", captionPosition: "footer" },
                { type: "image", icon: "🍃", caption: "Fern leaf pattern", captionPosition: "footer" }
              ]
            },
            {
              id: 3012,
              name: "Multicolor Floral Pot",
              artist: "Traditional Potter",
              info: "Hand-Painted Terracotta",
              description: "A cream-colored pot bursting with multicolor flower designs. Hand-painted flowers in red, purple, yellow, and blue with green stems and leaves create a vibrant garden scene. The butterfly motif adds whimsical charm. Perfect for housing plants or as a standalone decorative piece.",
              specs: ["Terracotta", "Hand-Painted Florals", "Cream Base", "Butterfly Design", "Diameter: 18cm"],
              origin: "India",
              media: [
                { type: "image", icon: "🌸", src: "static/img/image14.jpg", caption: "Complete pot with plant", captionPosition: "footer" },
                { type: "image", icon: "🦋", caption: "Floral detail", captionPosition: "footer" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Textile & Embroidery Art",
      icon: "🧵",
      photo: "static/img/textile-cover.png",
      tagline: "Hand-embroidered fabrics and woven textiles",
      description: "Celebrate traditional textile arts featuring intricate hand-embroidery, colorful thread work, and cultural symbolism. Each piece tells stories through fabric and thread.",
      color: "#9932CC",
      categories: [
        {
          id: 401,
          name: "Embroidered Wall Hangings",
          icon: "🌸",
          description: "Large embroidered tapestries with floral and symbolic designs",
          products: [
            {
              id: 4001,
              name: "Welcome Garden - Embroidered Tapestry",
              artist: "Master Embroiderer, Indian Textile Arts",
              info: "Hand-Embroidered Fabric, Traditional Stitching",
              description: "An exquisite embroidered welcome mat featuring a garden scene with vibrant flowers. The centerpiece displays a woman figure with outstretched arms holding flowers in red, purple, blue, and yellow. Colorful flowers surround the figure with green embroidered stems and leaves. The word 'WELCOME' in multi-colored threads tops the composition. Perfect for entryways or wall display.",
              specs: ["Hand-Embroidered", "Cotton Base", "Multicolor Thread", "100cm × 80cm", "Wall Hanging/Mat"],
              origin: "South India - Traditional Embroidery",
              media: [
                { type: "image", icon: "🌸", src: "static/img/image9.jpg", caption: "Complete composition", captionPosition: "footer" },
                { type: "image", icon: "👩", caption: "Figure detail", captionPosition: "footer" },
                { type: "image", icon: "🌼", caption: "Floral embroidery", captionPosition: "footer" }
              ]
            },
            {
              id: 4002,
              name: "Akshaya Art - Lotus Embroidery",
              artist: "Contemporary Embroidery Artist",
              info: "Hand-Embroidered Canvas",
              description: "A contemporary embroidered piece featuring the Akshaya Art signature lotus motif with ornate 3D lotus flowers surrounding it. Purple flowers with yellow centers dominate, with green vine elements creating flowing movements. The 'Akshaya Art' branding includes the symbolic lotus in vibrant colors.",
              specs: ["Hand-Embroidered", "Canvas Base", "3D Elements", "120cm × 100cm", "Art Piece"],
              origin: "India",
              media: [
                { type: "image", icon: "🌸", src: "static/img/image10.jpg", caption: "Full embroidered design", captionPosition: "footer" },
                { type: "image", icon: "💜", caption: "Purple flower detail", captionPosition: "footer" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Home Decor Accessories",
      icon: "✨",
      photo: "static/img/decor-cover.png",
      tagline: "Functional art for modern homes",
      description: "Transform your living space with handcrafted home accessories that blend traditional artistry with contemporary design. Each piece serves as both decoration and a conversation starter.",
      color: "#FF69B4",
      categories: [
        {
          id: 501,
          name: "Face Planters & Vessels",
          icon: "😊",
          description: "Artistic face planters with expressive features",
          products: [
            {
              id: 5001,
              name: "Serene Face Planter - Closed Eyes",
              artist: "Ceramic Artist Collective",
              info: "Hand-Painted Ceramic",
              description: "A meditative white ceramic planter with a peaceful face featuring closed, lashed eyes and full pink lips. The minimalist design celebrates tranquility and inner peace. Perfect for small succulents or air plants, doubling as a minimalist art piece for shelf or desk display.",
              specs: ["Ceramic", "Hand-Painted", "White Base", "Pink Accents", "Height: 15cm"],
              origin: "South India",
              media: [
                { type: "image", icon: "😊", src: "static/img/image12.jpg", caption: "Complete planter", captionPosition: "footer" },
                { type: "image", icon: "👁️", caption: "Face detail", captionPosition: "footer" }
              ]
            },
            {
              id: 5002,
              name: "Expressive Face Planter Set",
              artist: "Contemporary Ceramic Studio",
              info: "Hand-Painted Ceramic Planters",
              description: "A pair of artistic face planters with expressive features. One features closed, serene eyes with pink lips; the other displays open, alert eyes with bold eyebrows. Different facial expressions create a dialogue between pieces. Green ivy naturally cascades around both, enhancing the artistic composition.",
              specs: ["Ceramic", "Paired Set", "Hand-Painted", "White Base", "Height: 15-18cm each"],
              origin: "India",
              media: [
                { type: "image", icon: "😊", caption: "Serene face", captionPosition: "footer" },
                { type: "image", icon: "😲", caption: "Alert face", captionPosition: "footer" }
              ]
            }
          ]
        },
        {
          id: 502,
          name: "Decorated Bottles & Containers",
          icon: "🌸",
          description: "Hand-painted bottles and containers with floral motifs",
          products: [
            {
              id: 5011,
              name: "Floral Gift Set - Painted Bottles",
              artist: "Artisan Decorative Collective",
              info: "Hand-Decoupaged Glass, Mixed Media",
              description: "A beautiful collection of decorated bottles featuring hand-painted floral designs. Each bottle showcases different flower arrangements - roses, tulips, and botanical elements - in pink, red, and green colors. Ropes and natural fiber accents add texture. Perfect as gift containers or standalone decorative pieces for vanity or shelf styling.",
              specs: ["Glass Bottles", "Hand-Decoupaged", "Floral Design", "Rope Details", "Set of 4"],
              origin: "South India",
              media: [
                { type: "image", icon: "🌸", src: "static/img/image13.jpg", caption: "Complete bottle collection", captionPosition: "footer" },
                { type: "image", icon: "🌹", caption: "Floral detail", captionPosition: "footer" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Artist Process & Documentation",
      icon: "🎬",
      tagline: "Behind-the-scenes of creative traditions",
      description: "Explore the artistic journey and traditional techniques through video documentation. Witness master artisans at work, preserving centuries-old traditions.",
      color: "#FF6347",
      categories: [
        {
          id: 601,
          name: "Studio Documentaries",
          icon: "🎥",
          description: "Video documentation of artistic processes",
          products: [
            {
              id: 6001,
              name: "Kerala Mural Painting Process",
              artist: "Master Muralist Studio",
              info: "Video Documentation",
              description: "Watch traditional Kerala mural artists at work using natural pigments and ancient techniques. From pigment preparation to the intricate brushwork that brings divine stories to life, this documentation captures the meditative and precise nature of this heritage art form.",
              specs: ["Video Documentation", "Natural Pigments", "Traditional Technique", "Duration: 8-10 min"],
              origin: "Kerala, South India",
              media: [
                { type: "video", icon: "🎬", src: "https://www.facebook.com/reel/1263187195895567/", caption: "Creative Process", captionPosition: "header" },
                { type: "image", icon: "🎨", src: "static/img/image.png", caption: "Still from studio", captionPosition: "footer" }
              ]
            },
            {
              id: 6002,
              name: "Pichwai Painting Technique",
              artist: "Traditional Pichwai Master",
              info: "Video Documentation",
              description: "Discover the detailed techniques of creating pichwai paintings - hierarchical composition, layering of colors, and the spiritual intention behind each brushstroke. See how master artists build narratives through traditional Indian art methods.",
              specs: ["Video Documentation", "Heritage Technique", "Narrative Painting", "Duration: 10-12 min"],
              origin: "Rajasthan/Mathura Tradition",
              media: [
                { type: "video", icon: "🎬", src: "https://www.facebook.com/reel/1255181889364326/", caption: "Artistic Technique", captionPosition: "header" },
                { type: "image", icon: "🖌️", src: "static/img/image3.jpg", caption: "Artist at work", captionPosition: "footer" }
              ]
            },
            {
              id: 6003,
              name: "Hand-Embroidery Workshop",
              artist: "Textile Arts Collective",
              info: "Video Documentation",
              description: "Experience the intricate work of hand-embroidery artisans. See how colorful threads transform plain fabrics into vibrant tapestries through traditional stitching techniques passed down through generations.",
              specs: ["Video Documentation", "Hand-Embroidery", "Traditional Methods", "Duration: 7-9 min"],
              origin: "South India",
              media: [
                { type: "video", icon: "🎬", src: "https://www.facebook.com/reel/900527049328825/", caption: "Embroidery Workshop", captionPosition: "header" },
                { type: "image", icon: "🧵", src: "/static/img/image9.jpg", caption: "Thread work detail", captionPosition: "footer" }
              ]
            }
          ]
        }
      ]
    }
  ]
};