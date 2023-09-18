import React from 'react';

interface Props {
    margin?:string;
    headertitle?:any;
}

const CommonTable = ({margin, headertitle}:Props) => {
    return(
        <div className={`flex flex-col ${margin}`}>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                {
                                    headertitle?.map((item:string) => {
                                        return(
                                            <th scope="col" className="px-6 py-4">{item}</th>            
                                        )
                                    })
                                }                           
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-2 font-medium">2023-06-03 23:22</td>
                                <td className="whitespace-nowrap px-6 py-2">855-656</td>
                                <td className="whitespace-nowrap px-6 py-2">株式会社ジーシー</td>
                                <td className="whitespace-nowrap px-6 py-2">PDFファイル</td>
                                <td className="whitespace-nowrap px-6 py-2">バイオウェーブ</td>
                                <td className="whitespace-nowrap px-6 py-2">00:00:00</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                                <td className="whitespace-nowrap px-6 py-2">0</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonTable;