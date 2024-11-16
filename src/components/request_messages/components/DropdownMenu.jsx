export default function DropdownMenu({ isOpen, children }) {
    return isOpen ? (
      <div className="min-h-60 absolute -right-12 sm:right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50">
        {children}
      </div>
    ) : null;
  }