import { ImageResponse } from "next/og";

export const alt =
  "MD. Abdullah Al Shahed — Junior Full Stack Developer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08090b",
          color: "#f2f5f9",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "22px",
            letterSpacing: "4px",
            color: "#9db8ff",
          }}
        >
          <span>AS</span>
          <span
            style={{
              display: "flex",
              width: "72px",
              height: "1px",
              backgroundColor: "#9db8ff",
              opacity: 0.5,
            }}
          />
          <span style={{ color: "#8b93a1", fontSize: "16px" }}>
            PORTFOLIO
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "68px",
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 1.05,
            }}
          >
            <span>MD. ABDULLAH</span>
            <span style={{ color: "#c4cbd6" }}>AL SHAHED</span>
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#8b93a1" }}>
            Junior Full Stack Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1d2129",
            paddingTop: "26px",
            fontSize: "19px",
            color: "#8b93a1",
          }}
        >
          <span>JavaScript · React · Next.js · Node.js · MongoDB</span>
          <span style={{ color: "#9db8ff" }}>alshahed6951@gmail.com</span>
        </div>
      </div>
    ),
    size,
  );
}
