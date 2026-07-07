// FILE: components/Icons.jsx
export function SectionIcon({ name }) {
  const c = { viewBox: '0 0 24 24', fill: 'none', strokeWidth: '1.6', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'icon' };
  switch (name) {
    case 'strategy':
      return <svg {...c}><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-4 4" /></svg>;
    case 'transform':
      return <svg {...c}><path d="M21 12a9 9 0 1 1-9-9" /><path d="M21 3v6h-6" /><path d="M21 3 12 12" /></svg>;
    case 'ai':
      return <svg {...c}><circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M12 7v6M12 13 6 17.5M12 13l6 4.5" /></svg>;
    case 'roadmap':
      return <svg {...c}><path d="M3 12h4l3-9 4 18 3-9h4" /></svg>;
    case 'gov':
      return <svg {...c}><path d="M3 21h18" /><path d="M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /></svg>;
    case 'edu':
      return <svg {...c}><path d="M12 6.5C10.5 5 8 4 4 4v14c4 0 6.5 1 8 2.5" /><path d="M12 6.5C13.5 5 16 4 20 4v14c-4 0-6.5 1-8 2.5" /></svg>;
    case 'software':
      return <svg {...c}><rect x="3" y="4" width="18" height="14" rx="1" /><path d="m8 20 4-1 4 1M12 18v2" /></svg>;
    case 'classroom':
      return <svg {...c}><rect x="2" y="4" width="20" height="13" rx="1" /><path d="M8 21h8M12 17v4" /></svg>;
    case 'cloud':
      return <svg {...c}><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 19h11Z" /></svg>;
    case 'consulting':
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    default:
      return null;
  }
}

export function IndustryIcon({ index }) {
  const c = { viewBox: '0 0 24 24', fill: 'none', strokeWidth: '1.6', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'icon' };
  const paths = [
    <svg {...c} key="i0"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" /></svg>,
    <svg {...c} key="i1"><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>,
    <svg {...c} key="i2"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></svg>,
    <svg {...c} key="i3"><path d="M12 6.5C10.5 5 8 4 4 4v14c4 0 6.5 1 8 2.5C13.5 19 16 18 20 18V4c-4 0-6.5 1-8 2.5" /></svg>,
    <svg {...c} key="i4"><path d="M19 14c1.5 0 2-2 1-3l-2-2 1-4-4 1-2-2c-1-1-3-.5-3 1v3.5L6 10a2 2 0 0 0 0 4l3 1.5V19c0 1.5 2 2 3 1l2-2 4 1-1-4Z" /></svg>,
    <svg {...c} key="i5"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M2 10h20" /></svg>,
    <svg {...c} key="i6"><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 7h6M9 11h6M9 15h3" /></svg>,
    <svg {...c} key="i7"><circle cx="12" cy="8" r="3" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></svg>,
  ];
  return paths[index] || null;
}
