type PaginationControlsProps = {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
};

const PaginationControls = ({ page, setPage, totalPages }: PaginationControlsProps) => {
    return (
        <div className="flex justify-center mt-6 space-x-2">
            <button
                onClick={() => setPage(Math.max(page - 1, 1))}
                disabled={page === 1}
                className="px-3 py-1 bg-gray-200 rounded cursor-pointer disabled:cursor-auto disabled:opacity-50">
                Prev
            </button>
            <span className="px-3 py-1">{page}</span>
            <button
                onClick={() => setPage(Math.min(page + 1, totalPages))}
                disabled={page === totalPages}
                className="px-3 py-1 bg-gray-200 rounded cursor-pointer disabled:cursor-auto disabled:opacity-50">
                Next
            </button>
        </div>
    );
};

export default PaginationControls;
