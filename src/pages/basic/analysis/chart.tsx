export default function Chart() {
  return (
    <svg id="chart" width="800" height="500" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 450 L 50 0 L 800 0 L 800 450 Z"
        className="fill-red-400"
      ></path>
      <path d="M50 450 L 800 0 L 800 450 Z" className="fill-orange-400"></path>
      <path
        d="M50 450 L 800 450 L 800 330 Z"
        className="fill-yellow-400"
      ></path>
      <path d="M50 450 L 800 450 L 800 410 Z" className="fill-lime-400"></path>
      <path d="M50 450 L 800 450 L 800 440 Z" className="fill-green-400"></path>
      <path
        d="M50 0 L 50 450 L 800 450"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      ></path>
      <path
        d="M50 448 L 800 448"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      ></path>
      <text x="700" y="438" fill="black">
        O(log n), O(1)
      </text>
      <path
        d="M50 450 L 800 400"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      ></path>
      <text x="760" y="390" fill="black">
        O(n)
      </text>
      <path
        d="M50 450 Q 400 350, 800 150"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      ></path>
      <text x="630" y="190" fill="black">
        O(n log n)
      </text>
      <path
        d="M50 450 Q 180 380, 250 0"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      ></path>
      <text x="260" y="30" fill="black">
        O(n^2)
      </text>
      <path
        d="M50 450 C 100 430, 120 350, 120 0"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      ></path>
      <text x="125" y="20" fill="black">
        O(2^n)
      </text>
      <path
        d="M50 450 C 80 450, 80 350, 80 0"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      ></path>
      <text x="80" y="20" fill="black">
        O(n!)
      </text>
      <text
        x="0"
        y="0"
        transform="translate(30 230) rotate(-90)"
        className="fill-foreground"
      >
        Operations
      </text>
      <text
        x="0"
        y="0"
        transform="translate(420 470)"
        className="fill-foreground"
      >
        Elements
      </text>
    </svg>
  );
}
