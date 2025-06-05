import PaginationControls from './PaginationControls';

type PaginationListProps<T> = {
    title: string;
    items: T[] | undefined;
    isLoading: boolean;
    total: number;
    limit: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    renderItem: (item: T) => React.ReactNode;
    backButton?: React.ReactNode;
};

const PaginationList = <T,>({
    title,
    items,
    isLoading,
    total,
    limit,
    page,
    setPage,
    renderItem,
    backButton,
}: PaginationListProps<T>) => {
    const totalPages = Math.ceil(total / limit);

    return (
        <div>
            {backButton}
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            {isLoading ? <p>Loading...</p> : <ul className="space-y-2">{items?.map(renderItem)}</ul>}
            <PaginationControls
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default PaginationList;
