export default function Loader() {
  return (
    <div className="d-flex justify-content-center" style={{ marginTop: "2em" }}>
      <h4 style={{ marginRight: "1em" }}>Loading...</h4>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
