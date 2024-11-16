import Loader from "../../Loader";

export default function LoadingOverlay({ loading }) {
    return loading ? (
      <div className="flex items-center justify-center absolute inset-0 z-50 bg-black bg-opacity-10">
        <Loader size={7} />
      </div>
    ) : null;
  }