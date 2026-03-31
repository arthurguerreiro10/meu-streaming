const profileCategories = {
    Bianca: [
        {
            title: "Românticos para você",
            items: [
                { img: "https://image.tmdb.org/t/p/w500/rzdPqYx7Um4FUZeD8wpXqjAUcEr.jpg", badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=NmHCPHFMUAI" },
                { img: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtfnkybYZ9.jpg", youtube: "https://www.youtube.com/watch?v=VHaTOrRPXiU" },
                { img: "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=0pdqf4P9MB8" },
                { img: "https://image.tmdb.org/t/p/w500/gMFBhO7TWCSbZUkTRm4mN31Nkjv.jpg", badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=gpv7ayf_tyE" },
            ]
        },
        {
            title: "Animações divertidas",
            items: [
                { img: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=TbQm5doF_Uc" },
                { img: "https://image.tmdb.org/t/p/w500/eVal1g3a7fOCl6e1TEex1bikqkh.jpg", badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=2zLkjhLcxCk" },
                { img: "https://image.tmdb.org/t/p/w500/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg", youtube: "https://www.youtube.com/watch?v=AESmMG6JDWY" },
                { img: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=seMwpP0yeu4" },
            ]
        }
    ],
    Amanda: [
        {
            title: "Drama e mistério",
            items: [
                { img: "https://image.tmdb.org/t/p/w500/gMFBhO7TWCSbZUkTRm4mN31Nkjv.jpg", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=gpv7ayf_tyE" },
                { img: "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg", youtube: "https://www.youtube.com/watch?v=0pdqf4P9MB8" },
                { img: "https://image.tmdb.org/t/p/w500/rzdPqYx7Um4FUZeD8wpXqjAUcEr.jpg", badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=NmHCPHFMUAI" },
                { img: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg", youtube: "https://www.youtube.com/watch?v=seMwpP0yeu4" },
            ]
        },
        {
            title: "Favoritos da Amanda",
            items: [
                { img: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=TbQm5doF_Uc" },
                { img: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtfnkybYZ9.jpg", badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=VHaTOrRPXiU" },
                { img: "https://image.tmdb.org/t/p/w500/eVal1g3a7fOCl6e1TEex1bikqkh.jpg", youtube: "https://www.youtube.com/watch?v=2zLkjhLcxCk" },
                { img: "https://image.tmdb.org/t/p/w500/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=AESmMG6JDWY" },
            ]
        }
    ],
    Arthur: [
        {
            title: "Ação e aventura",
            items: [
                { img: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", top10: true, badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg" },
                { img: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs" },
                { img: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg", badge: "Épico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g" },
                { img: "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs" },
            ]
        },
        {
            title: "Épicos para maratonar",
            items: [
                { img: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs" },
                { img: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg" },
                { img: "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs" },
                { img: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g" },
            ]
        }
    ],
    Isaac: [
        {
            title: "Games e aventura",
            items: [
                { img: "https://image.tmdb.org/t/p/w500/eVal1g3a7fOCl6e1TEex1bikqkh.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=2zLkjhLcxCk" },
                { img: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", badge: "Diversão", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=TbQm5doF_Uc" },
                { img: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=seMwpP0yeu4" },
                { img: "https://image.tmdb.org/t/p/w500/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg", youtube: "https://www.youtube.com/watch?v=AESmMG6JDWY" },
            ]
        },
        {
            title: "Favoritos do Isaac",
            items: [
                { img: "https://image.tmdb.org/t/p/w500/eVal1g3a7fOCl6e1TEex1bikqkh.jpg", badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=2zLkjhLcxCk" },
                { img: "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=seMwpP0yeu4" },
                { img: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", youtube: "https://www.youtube.com/watch?v=TbQm5doF_Uc" },
                { img: "https://image.tmdb.org/t/p/w500/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=AESmMG6JDWY" },
            ]
        }
    ]
};

const defaultProfile = "Arthur";
const activeProfile = JSON.parse(localStorage.getItem("activeProfile"));
const profileName = activeProfile?.name || defaultProfile;

export const categories = profileCategories[profileName] || profileCategories[defaultProfile];