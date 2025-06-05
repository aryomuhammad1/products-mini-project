type PaginationControlsProps = {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
};

const PaginationControls = ({ page, setPage, totalPages }: PaginationControlsProps) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <div className="flex justify-center mt-6 space-x-2">
            <button
                onClick={() => setPage(Math.max(page - 1, 1))}
                disabled={page === 1}
                className="px-3 py-1 bg-gray-200 rounded cursor-pointer disabled:cursor-auto disabled:opacity-50">
                Prev
            </button>
            <div className="flex gap-4 px-3 py-1">
                {pageNumbers.map((n) => {
                    return (
                        <p
                            {...(page !== n ? { className: 'cursor-pointer' } : { className: 'text-gray-500' })}
                            onClick={() => setPage(n)}>
                            {n}
                        </p>
                    );
                })}
            </div>
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
