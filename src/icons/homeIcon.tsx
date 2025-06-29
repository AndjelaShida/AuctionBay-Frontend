export const HomeIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor" // ← ključna izmena
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 8 }}
  >
    <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-4v7H4a1 1 0 0 1-1-1V9.5z" />
  </svg>
);

export const UserIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor" // ← ovde takođe
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 8 }}
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
