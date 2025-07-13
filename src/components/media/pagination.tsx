'use client';

import { ArrowRight, ArrowLeft } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
        <div className="flex items-center justify-center mt-8 space-x-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-full border w-[44px] h-[44px] md:w-[64px] md:h-[64px] flex justify-center items-center border-[#04359C] cursor-pointer text-[#04359C] hover:bg-gray-100 disabled:opacity-50"
            >
               <ArrowLeft />
            </button>
            <p className="text-sm font-montserrat text-[#1A1A1A]">
                Page {currentPage} of {totalPages}
            </p>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-[100px] flex items-center gap-2 font-bold py-4 px-6 bg-[#04359C] font-montserrat text-white cursor-pointer text-sm disabled:opacity-50"
            >
                Next Page <ArrowRight/>
            </button>
        </div>
    );
};
