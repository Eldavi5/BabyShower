import React from "react";

interface IllustrationProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

// 1. Baby Bear sleeping on a cloud
export function BabyBear({ className = "", size = 200, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Glow effect */}
      <circle cx="100" cy="100" r="70" fill="url(#babyBearGlow)" opacity="0.45" />

      {/* Cloud */}
      <path
        d="M50 140C40 140 32 132 32 122C32 113.5 38.5 106.5 47 104.5C45.5 101.5 45 98.5 45 95C45 83 55 73 67 73C72.5 73 77.5 75 81.5 78.5C86.5 67.5 97.5 60 110 60C127.5 60 142 73.5 143.5 90.5C149.5 91 154.5 94.5 157.5 99.5C163.5 101.5 168 107.5 168 114.5C168 123.5 160.5 131 151.5 131C150.5 131 149.5 131 148.5 130.5C144.5 136 138 140 130 140C128.5 140 127 140 125.5 139.5C120.5 144.5 113.5 147.5 106 147.5C97.5 147.5 90 143.5 85.5 137.5C81.5 139 77 140 72 140C63.5 140 56 135 52 128C51.5 128 50.5 128 50 128V140Z"
        fill="url(#cloudGrad)"
        filter="drop-shadow(0 8px 20px rgba(186, 230, 253, 0.3))"
      />

      {/* Bear Head */}
      <circle cx="100" cy="98" r="30" fill="url(#bearFur)" />

      {/* Bear Ears */}
      <circle cx="75" cy="80" r="10" fill="url(#bearFur)" />
      <circle cx="75" cy="80" r="6" fill="#FCE7F3" /> {/* Inner ear pink */}
      <circle cx="125" cy="80" r="10" fill="url(#bearFur)" />
      <circle cx="125" cy="80" r="6" fill="#FCE7F3" />

      {/* Bear Cheeks (blush) */}
      <circle cx="82" cy="104" r="4.5" fill="#FCA5A5" opacity="0.6" />
      <circle cx="118" cy="104" r="4.5" fill="#FCA5A5" opacity="0.6" />

      {/* Bear Snout */}
      <ellipse cx="100" cy="106" rx="10" ry="7.5" fill="#FFFBF2" />

      {/* Bear Closed Sleeping Eyes */}
      <path d="M82 98C84 101 88 101 90 98" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M110 98C112 101 116 101 118 98" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

      {/* Bear Nose */}
      <path d="M97 104C97 102.5 100 101.5 100 101.5C100 101.5 103 102.5 103 104C103 105.5 100 106.5 100 106.5C100 106.5 97 105.5 97 104Z" fill="#334155" />
      
      {/* Sleeping Mouth Line */}
      <path d="M100 108V111" stroke="#475569" strokeWidth="1.5" />

      {/* Cute sleeping hat */}
      <path
        d="M87 75C87 75 92 50 108 55C118 58 111 72 111 72L100 78L87 75Z"
        fill="url(#hatGrad)"
      />
      <circle cx="111" cy="53" r="4" fill="#FFFFFF" />

      {/* Bear Paws peeking over cloud */}
      <circle cx="86" cy="116" r="6" fill="url(#bearFur)" />
      <circle cx="114" cy="116" r="6" fill="url(#bearFur)" />

      {/* Definitions */}
      <defs>
        <radialGradient id="babyBearGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cloudGrad" x1="100" y1="60" x2="100" y2="147.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
        <linearGradient id="bearFur" x1="100" y1="68" x2="100" y2="128" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#E6C280" />
        </linearGradient>
        <linearGradient id="hatGrad" x1="99" y1="53" x2="99" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. Mom and Dad Bears side by side (Tender family vector)
export function MamaPapaBear({ className = "", size = 200, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Background Hearts */}
      <path
        d="M100 65C100 65 91 50 80 50C69 50 63 60 63 71C63 88 100 115 100 115C100 115 137 88 137 71C137 60 131 50 120 50C109 50 100 65 100 65Z"
        fill="#E0F2FE"
        opacity="0.7"
      />
      <path
        d="M100 45C100 45 95 35 88 35C81 35 77 41 77 48C77 59 100 76 100 76C100 76 123 59 123 48C123 41 119 35 112 35C105 35 100 45 100 45Z"
        fill="#BAE6FD"
        opacity="0.8"
      />

      {/* Dad Bear (Left/Larger) */}
      <g transform="translate(-8, 12)">
        {/* Ears */}
        <circle cx="70" cy="85" r="12" fill="#E6C280" />
        <circle cx="70" cy="85" r="7" fill="#FCE7F3" />
        <circle cx="118" cy="85" r="12" fill="#E6C280" />
        <circle cx="118" cy="85" r="7" fill="#FCE7F3" />
        
        {/* Head */}
        <circle cx="94" cy="106" r="32" fill="#E6C280" stroke="#FFFFFF" strokeWidth="2.5" />
        
        {/* Cheeks */}
        <circle cx="76" cy="112" r="4.5" fill="#FCA5A5" opacity="0.5" />
        <circle cx="112" cy="112" r="4.5" fill="#FCA5A5" opacity="0.5" />

        {/* Eyes (Happy arcs) */}
        <path d="M78 103C81 100 85 100 88 103" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M100 103C103 100 107 100 110 103" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

        {/* Snout */}
        <ellipse cx="94" cy="114" rx="9" ry="6.5" fill="#FFFBF2" />
        <path d="M92 112C92 110.8 94 110 94 110C94 110 96 110.8 96 112C96 113.2 94 114 94 114C94 114 92 113.2 92 112Z" fill="#334155" />
        
        {/* Bow Tie (Blue) */}
        <path d="M85 138L94 142L103 138L101 148L94 145L87 148L85 138Z" fill="#0284C7" />
        <circle cx="94" cy="141" r="3" fill="#38BDF8" />
      </g>

      {/* Mom Bear (Right/Slightly smaller & overlaps) */}
      <g transform="translate(42, 24)">
        {/* Ears */}
        <circle cx="62" cy="88" r="11" fill="#F5DEB3" />
        <circle cx="62" cy="88" r="6.5" fill="#FCE7F3" />
        <circle cx="106" cy="88" r="11" fill="#F5DEB3" />
        <circle cx="106" cy="88" r="6.5" fill="#FCE7F3" />
        
        {/* Head */}
        <circle cx="84" cy="108" r="29" fill="#F5DEB3" stroke="#FFFFFF" strokeWidth="2.5" />
        
        {/* Cheeks */}
        <circle cx="68" cy="114" r="4.5" fill="#FCA5A5" opacity="0.6" />
        <circle cx="100" cy="114" r="4.5" fill="#FCA5A5" opacity="0.6" />

        {/* Eyes (Happy blinking) */}
        <path d="M70 106C73 103 76 103 79 106" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M89 106C92 103 95 103 98 106" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

        {/* Snout */}
        <ellipse cx="84" cy="115" rx="8" ry="6" fill="#FFFBF2" />
        <path d="M82 113C82 111.8 84 111 84 111C84 111 86 111.8 86 113C86 114.2 84 115 84 115C84 115 82 114.2 82 113Z" fill="#334155" />

        {/* Flower behind ear (Pink/White) */}
        <g transform="translate(100, 78)">
          <circle cx="0" cy="0" r="4" fill="#F87171" />
          <circle cx="-5" cy="0" r="3.5" fill="#FFF" />
          <circle cx="5" cy="0" r="3.5" fill="#FFF" />
          <circle cx="0" cy="-5" r="3.5" fill="#FFF" />
          <circle cx="0" cy="5" r="3.5" fill="#FFF" />
          <circle cx="0" cy="0" r="2.5" fill="#FCD34D" />
        </g>
      </g>
    </svg>
  );
}

// 3. Bear peeking from a gift box
export function GiftBear({ className = "", size = 200, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Balloons floating in background */}
      <g transform="translate(20, -5)">
        <path d="M125 65C135 65 145 55 145 42C145 29 135 20 125 20C115 20 105 29 105 42C105 55 115 65 125 65Z" fill="#7DD3FC" opacity="0.8" />
        <path d="M125 65L125 90" stroke="#7DD3FC" strokeWidth="1.5" strokeDasharray="3 3" />
      </g>
      <g transform="translate(5, 5)">
        <path d="M60 55C70 55 78 47 78 35C78 23 70 15 60 15C50 15 42 23 42 35C42 47 50 55 60 55Z" fill="#BAE6FD" opacity="0.6" />
        <path d="M60 55L75 90" stroke="#BAE6FD" strokeWidth="1.5" strokeDasharray="3 3" />
      </g>

      {/* Bear Head peeking */}
      <g transform="translate(0, 15)">
        {/* Ears */}
        <circle cx="85" cy="80" r="9" fill="#E6C280" />
        <circle cx="85" cy="80" r="5" fill="#FCE7F3" />
        <circle cx="115" cy="80" r="9" fill="#E6C280" />
        <circle cx="115" cy="80" r="5" fill="#FCE7F3" />
        
        {/* Head */}
        <path d="M72 108C72 90 85 78 100 78C115 78 128 90 128 108C128 109 128 111 127.5 112H72.5C72 111 72 109 72 108Z" fill="#E6C280" />

        {/* Eyes (Happy arches) */}
        <path d="M85 96C87 94 90 94 92 96" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M108 96C110 94 113 94 115 96" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

        {/* Snout */}
        <ellipse cx="100" cy="103" rx="7" ry="5" fill="#FFFBF2" />
        <circle cx="100" cy="101" r="2.5" fill="#334155" />
      </g>

      {/* Gift Box Lid (skewed on top) */}
      <path
        d="M60 108H140V120H60V108Z"
        fill="#0284C7"
        filter="drop-shadow(0 4px 6px rgba(2, 132, 199, 0.2))"
      />
      {/* Box Ribbon Lid */}
      <path d="M96 108H104V120H96V108Z" fill="#FCD34D" />

      {/* Gift Box Base */}
      <path
        d="M65 120H135V175C135 178 132 180 129 180H71C68 180 65 178 65 175V120Z"
        fill="#38BDF8"
      />
      {/* Box Ribbon Base */}
      <path d="M96 120H104V180H96V120Z" fill="#FCD34D" />
      
      {/* Cute Bow on top */}
      <path
        d="M100 108C92 102 91 107 97 108C103 109 108 102 100 108Z"
        fill="#FCD34D"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="108" r="4.5" fill="#F59E0B" />
    </svg>
  );
}

// 4. Ultrasound Bear (holding a baby bottle inside a frame)
export function UltrasoundBear({ className = "", size = 200, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Frame base (Polaroid style) */}
      <rect x="35" y="25" width="130" height="150" rx="12" fill="#FFFFFF" filter="drop-shadow(0 15px 35px rgba(125,156,206,0.2))" />
      <rect x="45" y="35" width="110" height="105" rx="6" fill="#F0F9FF" />

      {/* Inside the frame: Ultrasound Mockup */}
      <g transform="translate(45, 35)">
        {/* Dark ultrasound background */}
        <rect x="0" y="0" width="110" height="105" rx="6" fill="#0F172A" />
        
        {/* Soft blue glowing rings (scanning view) */}
        <circle cx="55" cy="52" r="38" stroke="#1E293B" strokeWidth="1" />
        <circle cx="55" cy="52" r="28" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Baby shape vector (glow style) */}
        <ellipse cx="64" cy="54" rx="18" ry="14" fill="url(#ultrasoundGlow)" transform="rotate(-15 64 54)" />
        <circle cx="48" cy="46" r="10" fill="url(#ultrasoundGlow)" />
        {/* Hand/leg highlights */}
        <path d="M66 65C62 67 56 65 54 62" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <path d="M52 38C54 34 58 32 60 35" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        
        {/* Text indicators */}
        <text x="6" y="16" fill="#64748B" fontSize="7" fontFamily="monospace">SANTIAGO</text>
        <text x="6" y="25" fill="#64748B" fontSize="6" fontFamily="monospace">W: 24 GA</text>
        <text x="80" y="96" fill="#0284C7" fontSize="7" fontWeight="bold" fontFamily="monospace">100% OK</text>
      </g>

      {/* Bear holding the polaroid frame from behind */}
      {/* Paw Left */}
      <path
        d="M26 122C24 117 31 108 36 112C41 116 38 126 33 126C30 126 28 124 26 122Z"
        fill="#E6C280"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      {/* Paw Right */}
      <path
        d="M174 122C176 117 169 108 164 112C159 116 162 126 167 126C170 126 172 124 174 122Z"
        fill="#E6C280"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />

      {/* Baby bottle illustration on bottom right */}
      <g transform="translate(136, 134)">
        {/* Bottle Body */}
        <rect x="2" y="10" width="18" height="24" rx="4" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2" />
        {/* Measurements */}
        <line x1="6" y1="16" x2="11" y2="16" stroke="#bae6fd" strokeWidth="1.5" />
        <line x1="6" y1="22" x2="13" y2="22" stroke="#bae6fd" strokeWidth="1.5" />
        <line x1="6" y1="28" x2="10" y2="28" stroke="#bae6fd" strokeWidth="1.5" />
        {/* Cap (Blue) */}
        <path d="M2 10H20V6C20 4.5 18 3 15 3H7C4 3 2 4.5 2 6V10Z" fill="#0284C7" />
        {/* Nipple (Pink/Peach) */}
        <path d="M9 3C9 3 9 0 11 0C13 0 13 3 13 3H9Z" fill="#FDA4AF" />
      </g>

      <defs>
        <radialGradient id="ultrasoundGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="50%" stopColor="#7DD3FC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// 5. Bear footprints divider
export function BearFootprints({ className = "", size = 48 }: IllustrationProps) {
  return (
    <div className={`flex justify-center items-center gap-6 py-2 select-none ${className}`}>
      {/* Left Footprint */}
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-300 rotate-[-12deg]">
        <ellipse cx="20" cy="24" rx="10" ry="8" fill="currentColor" />
        {/* Toes */}
        <circle cx="10" cy="13" r="3.5" fill="currentColor" />
        <circle cx="17" cy="9" r="3.5" fill="currentColor" />
        <circle cx="25" cy="9" r="3.5" fill="currentColor" />
        <circle cx="31" cy="14" r="3.5" fill="currentColor" />
      </svg>
      {/* Right Footprint */}
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-300 rotate-[12deg] opacity-75">
        <ellipse cx="20" cy="24" rx="10" ry="8" fill="currentColor" />
        {/* Toes */}
        <circle cx="10" cy="14" r="3.5" fill="currentColor" />
        <circle cx="15" cy="9" r="3.5" fill="currentColor" />
        <circle cx="23" cy="9" r="3.5" fill="currentColor" />
        <circle cx="30" cy="13" r="3.5" fill="currentColor" />
      </svg>
    </div>
  );
}

// 6. Floating Background Elements (Bears, Clouds, Stars)
export function FloatingElements() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Clouds drifting */}
      <div className="absolute top-[8%] left-[-10vw] cloud-drift-1 opacity-25">
        <svg width="120" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C19 9 25 3 32 3C39 3 45 7 48 13C52 7 59 3 67 3C78 3 87 11 89 22C95 21 100 24 103 29C109 30 114 36 114 43C114 52 106 60 97 60H20V50Z" fill="#BAE6FD" />
        </svg>
      </div>
      
      <div className="absolute top-[48%] right-[-10vw] cloud-drift-2 opacity-20">
        <svg width="160" height="90" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C19 9 25 3 32 3C39 3 45 7 48 13C52 7 59 3 67 3C78 3 87 11 89 22C95 21 100 24 103 29C109 30 114 36 114 43C114 52 106 60 97 60H20V50Z" fill="#E0F2FE" />
        </svg>
      </div>

      <div className="absolute top-[78%] left-[-10vw] cloud-drift-1 opacity-25" style={{ animationDelay: "15s" }}>
        <svg width="100" height="60" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C19 9 25 3 32 3C39 3 45 7 48 13C52 7 59 3 67 3C78 3 87 11 89 22C95 21 100 24 103 29C109 30 114 36 114 43C114 52 106 60 97 60H20V50Z" fill="#BAE6FD" />
        </svg>
      </div>

      {/* Floating Bear Faces (Outlines) */}
      <div className="absolute top-[18%] left-[8%] opacity-[0.06] select-none text-sky-500 scale-[1.3] bear-float">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="30" cy="30" r="14" />
          <circle cx="70" cy="30" r="14" />
          <circle cx="50" cy="55" r="36" />
        </svg>
      </div>

      <div className="absolute top-[62%] right-[6%] opacity-[0.05] select-none text-sky-500 scale-[1.1] bear-float" style={{ animationDelay: "4s", animationDuration: "14s" }}>
        <svg width="90" height="90" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="30" cy="30" r="14" />
          <circle cx="70" cy="30" r="14" />
          <circle cx="50" cy="55" r="36" />
        </svg>
      </div>

      {/* Stars that slowly pulse */}
      <div className="absolute top-[28%] right-[15%] w-4 h-4 text-sky-300 opacity-60 animate-pulse" style={{ animationDuration: "3s" }}>✦</div>
      <div className="absolute top-[5%] left-[25%] w-3 h-3 text-sky-200 opacity-80 animate-pulse" style={{ animationDuration: "2s" }}>✦</div>
      <div className="absolute top-[82%] left-[12%] w-5 h-5 text-sky-300 opacity-50 animate-pulse" style={{ animationDuration: "4s" }}>✦</div>
      <div className="absolute top-[40%] left-[82%] w-3 h-3 text-sky-200 opacity-70 animate-pulse" style={{ animationDuration: "2.5s" }}>✦</div>
      <div className="absolute top-[92%] right-[22%] w-4 h-4 text-sky-300 opacity-60 animate-pulse" style={{ animationDuration: "3.5s" }}>✦</div>
    </div>
  );
}
