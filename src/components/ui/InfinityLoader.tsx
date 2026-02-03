'use client';

const InfinityLoader = ({ size = 64 }: { size?: number }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M25 25C25 13.954 16.046 5 5 5C-6.046 5 -15 13.954 -15 25C-15 36.046 -6.046 45 5 45C16.046 45 25 36.046 25 25ZM25 25C25 13.954 33.954 5 45 5C56.046 5 65 13.954 65 25C65 36.046 56.046 45 45 45C33.954 45 25 36.046 25 25Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="90"
          strokeDashoffset="90"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="90"
            to="0"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default InfinityLoader;
