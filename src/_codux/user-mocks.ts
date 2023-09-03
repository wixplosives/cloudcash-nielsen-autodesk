interface Goal {
    title: string;
    imageUrl: string;
    date: string;
    amount: number;
    currency: string;
}

// interface for Goals component
interface GoalsProps {
    goals: Goal[];
}

// mock data for Goals component
const holidaysImageUrl =
    'https://static.wixstatic.com/shapes/610b66_71524cee9a8c43de91e86b0ecc9f9cab.svg'; // mountain.svg (36x36)
const renovationImageUrl =
    'https://static.wixstatic.com/shapes/610b66_0d486933d56942b48bfed545eba3f3e2.svg'; // brush.svg (36x36)
const xboxImageUrl =
    'https://static.wixstatic.com/shapes/610b66_ca99e04d140f4b8a9633dd902d2cb1b8.svg'; // controller.svg (37x36)

const goals: Goal[] = [
    {
        title: 'Holidays',
        imageUrl: holidaysImageUrl,
        date: 'Aug 7, 2022',
        amount: 550,
        currency: 'USD',
    },
    {
        title: 'Renovation',
        imageUrl: renovationImageUrl,
        date: 'Sep 15, 2022',
        amount: 200,
        currency: 'USD',
    },
    {
        title: 'Xbox',
        imageUrl: xboxImageUrl,
        date: 'Jan 1, 2023',
        amount: 820,
        currency: 'USD',
    },
];

type OutcomeStatisticsItemType = 'shopping' | 'electronics' | 'travel';

export interface OutcomeStatisticsItemProps {
    label: string;
    progress: number;
    type: OutcomeStatisticsItemType;
}

// interface for OutcomeStatistics component
interface OutcomeStatisticsProps {
    statistics: OutcomeStatisticsItemProps[];
}

export const glyphMap = {
    shopping: 'shoppingCart',
    electronics: 'localShipping',
    travel: 'hiking',
};

// mock data for OutcomeStatistics component
const outcomeStatistics = [
    { label: 'Shopping', progress: 100, type: 'shopping' },
    { label: 'Electronics', progress: 21, type: 'electronics' },
    { label: 'Travel', progress: 74, type: 'travel' },
];

export const userInfo = {
    goals,
    outcomeStatistics,
};
