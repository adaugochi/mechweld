'use client';

import { useState } from 'react';
import { mediaData } from '../constants/media-data';
import { MediaCardGrid } from './media-card-grid';
import { Pagination } from './pagination';

const ITEMS_PER_PAGE = 6;

export const MediaGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(mediaData.length / ITEMS_PER_PAGE);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = mediaData.slice(start, start + ITEMS_PER_PAGE);

    return (
        <div>
            <div className="w-[90%] mx-auto py-10 md:py-20 ">
                <MediaCardGrid data={paginatedData} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}
