export function BackgroundPattern() {
    return (
        <div
            className="pointer-events-none fixed inset-0 opacity-[0.03]"
            style={{
                backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 20px,
          #d97706 20px,
          #d97706 21px
        )`,
            }}
        />
    );
}