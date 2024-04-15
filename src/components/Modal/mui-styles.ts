export const wrapper = () => ({
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#303030",
  boxShadow: 24,
  padding: 4,
  borderRadius: "32px",
  width: "600px",
});

export const box = () => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
});
