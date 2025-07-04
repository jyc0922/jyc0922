<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>삼국지 인물론</title>
    <style>
        /* CSS Variables for consistent styling and easy modification */
        :root {
            --header-height: 80px;
            --footer-height: 60px;
            --gap-desktop: 20px;
            --gap-mobile: 15px;
            --sidebar-width-desktop: 25%;
            
            /* 양피지 느낌의 색상 팔레트 */
            --primary-bg-color: rgba(245, 241, 230, 0.95); /* 양피지 베이스 */
            --secondary-bg-color: rgba(250, 248, 240, 0.9); /* 밝은 양피지 */
            --content-bg-color: rgba(252, 250, 245, 0.95); /* 매우 밝은 양피지 */
            --article-bg-color: rgba(248, 244, 235, 0.9); /* 중간 양피지 */
            
            /* 텍스트 색상 */
            --text-color: #2c2c2c; /* 진한 회색 */
            --link-color: #8B4513; /* 갈색 링크 */
            --link-hover-color: #A0522D; /* 호버 시 더 진한 갈색 */
            
            /* 테두리 및 그림자 */
            --border-color: #D2B48C; /* 탄 베이지 */
            --shadow-color: rgba(139, 69, 19, 0.2); /* 갈색 그림자 */
            
            /* 탭 스타일 */
            --tab-label-bg: #F5F5DC; /* 베이지 */
            --tab-label-active-bg: #8B4513; /* 갈색 */
            --tab-label-color: #5D4037; /* 진한 갈색 */
            --tab-label-active-color: #F5F5DC; /* 베이지 */
            
            /* 테이블 스타일 - 세련된 디자인 */
            --table-border-color: #D2B48C; /* 탄 베이지 */
            --table-header-bg: linear-gradient(135deg, #8B4513, #A0522D); /* 갈색 그라데이션 */
            --table-header-color: #F5F5DC; /* 베이지 텍스트 */
            --table-row-even-bg: rgba(245, 241, 230, 0.6); /* 밝은 양피지 */
            --table-row-odd-bg: rgba(250, 248, 240, 0.8); /* 더 밝은 양피지 */
            --table-row-hover-bg: rgba(210, 180, 140, 0.3); /* 호버 시 탄 베이지 */
            
            /* 박스 스타일 */
            --box-bg-color: rgba(245, 241, 230, 0.9); /* 양피지 */
            --box-border-color: #D2B48C; /* 탄 베이지 */
            
            /* 푸터 텍스트 */
            --footer-text-color: #5D4037; /* 진한 갈색 */
        }

        body {
            display: grid;
            background: url(https://i.pinimg.com/736x/c8/1e/35/c81e357bd8a4004f19c8493c60ff529a.jpg) no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            min-height: 100vh; /* Ensure body takes full viewport height */
            font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Prefer Inter if available, fallback to Segoe UI */
            color: var(--text-color);
            overflow-x: hidden; /* Prevent horizontal scrolling */

            /* Desktop layout using CSS Grid */
            grid-template-columns: var(--sidebar-width-desktop) 1fr;
            grid-template-rows: var(--header-height) auto 1fr var(--footer-height);
            grid-template-areas:
                "header header"
                "nav nav"
                "aside main"
                "footer footer";
            gap: var(--gap-desktop); /* Gap between grid items */
        }

        /* Header styling */
        header {
            grid-area: header;
            background-color: var(--primary-bg-color);
            text-align: center;
            font-size: 2.5em; /* Responsive font size for larger screens */
            line-height: var(--header-height);
            color: var(--link-color);
            text-shadow: 2px 2px 4px var(--shadow-color);
            border-bottom: 2px solid var(--border-color);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 0 0 15px 15px; /* Rounded bottom corners */
        }

        header h1 {
            margin: 0; /* Remove default margin for h1 */
            font-size: 1em; /* Make h1 inherit parent's font-size set above */
        }

        /* Footer styling */
        footer {
            grid-area: footer;
            background-color: var(--primary-bg-color);
            font-size: 0.9em;
            text-align: center;
            line-height: var(--footer-height);
            color: var(--footer-text-color); /* Darker text color */
            padding: 0 10px;
            border-top: 2px solid var(--border-color);
            box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 15px 15px 0 0; /* Rounded top corners */
        }

        footer a {
            color: var(--footer-text-color); /* Darker link color */
            text-decoration: none;
            margin: 0 5px;
            transition: color 0.3s ease;
        }

        footer a:hover {
            color: var(--link-hover-color);
        }

        /* Navigation styling (tab container) */
        nav {
            grid-area: nav;
            background-color: var(--primary-bg-color);
            padding: 10px 20px;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap; /* Allow tabs to wrap on smaller screens */
            justify-content: center; /* Center nav items */
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 0, 0.3);
            border-radius: 10px; /* Slightly rounded overall nav */
            margin: 0 var(--gap-desktop); /* Horizontal margin to match grid gap */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .tab-container {
            /* nav와 똑같이 동작하도록 복사 */
            grid-area: nav;
            background-color: var(--primary-bg-color);
            padding: 10px 20px;
            box-sizing: border-box;
            display: block; /* flex 대신 카드 그리드(.nav-grid)만 감싸도록 block 처리 */
            margin: 0 var(--gap-desktop);
        }

        /* Hide radio buttons */
        input[type="radio"] {
            display: none;
        }

        /* Style for tab labels (buttons) */
        label {
            display: inline-block;
            padding: 12px 20px;
            background-color: var(--tab-label-bg);
            margin: 0 5px 10px 5px; /* Margin around labels */
            cursor: pointer;
            border-radius: 8px 8px 0 0; /* Rounded top corners for tabs */
            transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
            font-weight: bold;
            color: var(--tab-label-color);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            white-space: nowrap; /* Prevent tab labels from breaking lines */
        }

        label:hover {
            background-color: #d0d0d0; /* Darker grey on hover */
        }

        /* Style for checked tab label */
        input[type="radio"]:checked + label {
            background-color: var(--tab-label-active-bg);
            color: var(--tab-label-active-color);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* More pronounced shadow when active */
            transform: translateY(-2px); /* Slight lift effect */
        }

        /* Common style for tab content */
        .content {
            display: none; /* Hidden by default */
            width: 100%; /* Take full width within its container */
            padding: var(--gap-desktop);
            border-radius: 0 18px 18px 18px; /* Rounded corners for content box */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
            margin-top: 10px;
            background-color: var(--article-bg-color); /* Consistent background */
            color: var(--text-color);
            text-align: left;
            box-sizing: border-box; /* Include padding in width */
        }

        .content h4 {
            color: var(--text-color);
            margin-top: 0;
            font-size: 1.4em;
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        .content p {
            line-height: 1.6;
        }

        /* Show active tab content */
        #tab1:checked ~ #content1,
        #tab2:checked ~ #content2,
        #tab3:checked ~ #content3,
        #tab4:checked ~ #content4,
        #tab5:checked ~ #content5 {
            display: block; /* Display the active tab content */
        }

        /* Aside (sidebar) styling */
        aside {
            grid-area: aside;
            background-color: var(--secondary-bg-color);
            padding: var(--gap-desktop);
            box-shadow: 2px 0 5px var(--shadow-color);
            overflow-y: auto;
            border-radius: 10px;
            margin-left: var(--gap-desktop);
            box-sizing: border-box;
            display: grid; /* flex -> grid로 변경 */
            grid-template-columns: 1fr 1fr; /* 2열 그리드 */
            gap: 16px; /* 버튼 그룹 간 간격 */
            align-items: start;
        }

        aside article {
            width: 100%;
            grid-column: 1 / -1; /* article(후한의 멸망)은 2칸 전체 차지 */
        }

        aside h3 {
            color: var(--text-color);
            margin-top: 0;
            font-size: 1.3em;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--border-color);
            margin-bottom: 20px;
            font-family: 'Georgia', serif;
        }

        /* Box styling within aside */
        .box {
            background: linear-gradient(135deg, var(--box-bg-color), var(--secondary-bg-color));
            box-shadow: 0 4px 12px var(--shadow-color);
            margin: 0; /* Removed auto margin, now flex container handles centering */
            border-radius: 12px;
            padding: 20px;
            text-align: left;
            box-sizing: border-box;
            border: 2px solid var(--border-color);
            width: 100%; /* Ensure box takes full width of its parent article */
            transition: all 0.3s ease;
        }

        .box:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px var(--shadow-color);
        }

        .box h2 {
            text-align: center;
            color: var(--text-color);
            margin-top: 0;
            margin-bottom: 15px;
            font-size: 1.3em;
            font-family: 'Georgia', serif;
            font-weight: bold;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
        }

        .box ol {
            padding-left: 25px;
            line-height: 1.8;
            color: var(--text-color);
        }

        .box ol li {
            margin-bottom: 10px;
            font-family: 'Georgia', serif;
        }

        /* Main content area styling */
        main {
            grid-area: main;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid for articles */
            gap: var(--gap-desktop);
            background-color: var(--content-bg-color);
            padding: var(--gap-desktop);
            overflow-y: auto; /* Allow scrolling for long content */
            border-radius: 10px;
            margin-right: var(--gap-desktop); /* Right margin to align with grid */
            box-sizing: border-box;
        }

        /* Article styling within main content */
        main article {
            background-color: var(--article-bg-color);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            box-shadow: 3px 3px 8px var(--shadow-color);
            padding: 15px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;
        }

        /* Table styling */
        table {
            width: 100%;
            margin: 20px 0;
            border-collapse: collapse;
            background-color: var(--content-bg-color);
            box-shadow: 0 4px 15px var(--shadow-color);
            border-radius: 12px; /* 더 둥근 모서리 */
            overflow: hidden; /* Hide overflowing borders for rounded corners */
            border: 2px solid var(--border-color);
        }

        caption {
            font-size: 1.5em;
            color: var(--text-color);
            margin-bottom: 15px;
            font-weight: bold;
            padding: 15px 0;
            text-align: center;
            background: linear-gradient(135deg, var(--border-color), var(--box-bg-color));
            border-radius: 8px;
            box-shadow: 0 2px 8px var(--shadow-color);
            font-family: 'Georgia', 'Times New Roman', serif;
            letter-spacing: 1px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }

        th, td {
            padding: 15px 18px;
            border: 1px solid var(--border-color);
            text-align: center;
            box-sizing: border-box;
            transition: background-color 0.3s ease;
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.4;
        }

        th {
            background: var(--table-header-bg);
            color: var(--table-header-color);
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
            font-size: 1.1em;
            font-family: 'Georgia', 'Times New Roman', serif;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            font-variant: small-caps;
        }

        td {
            font-size: 1em;
            font-weight: 500;
            color: var(--text-color);
            font-family: 'Georgia', 'Times New Roman', serif;
        }

        /* 특별한 셀 스타일링 */
        td:first-child {
            font-weight: bold;
            color: var(--link-color);
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(210, 180, 140, 0.1));
        }

        /* 숫자 데이터 셀 */
        td:nth-child(3),
        td:nth-child(4),
        td:nth-child(5) {
            font-family: 'Courier New', monospace;
            font-weight: 600;
            color: var(--link-hover-color);
        }

        /* 특정 텍스트 스타일링 - 클래스 기반 */
        .highlight-text {
            font-weight: bold;
            color: var(--link-color);
            font-family: 'Georgia', 'Times New Roman', serif;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
            letter-spacing: 0.3px;
        }

        .era-text {
            font-size: 1.1em;
            color: #8B4513;
            font-weight: 700;
        }

        .category-text {
            font-weight: 600;
            color: #A0522D;
            font-style: italic;
        }

        .region-text {
            font-weight: 600;
            color: #8B4513;
        }

        .event-text {
            font-weight: 600;
            color: #CD853F;
        }

        .literature-text {
            font-weight: 600;
            color: #D2691E;
            font-style: italic;
        }

        tr:nth-child(even) {
            background-color: var(--table-row-even-bg);
        }

        tr:nth-child(odd) {
            background-color: var(--table-row-odd-bg);
        }

        /* 테이블 행 호버 효과 */
        tr:hover {
            background-color: var(--table-row-hover-bg);
            transform: scale(1.01);
            transition: all 0.3s ease;
        }

        /* New section styling for the "시대 흐름" content */
        .time-flow-overlay { /* Changed class to denote overlay behavior */
            position: fixed; /* Position relative to the viewport */
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8); /* Dark semi-transparent background */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000; /* Bring to front */
            opacity: 0; /* Start hidden with opacity */
            visibility: hidden; /* Start hidden with visibility */
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        /* 오버레이 내부 닫기 버튼 스타일 */
        .overlay-close-btn {
            position: fixed; /* 고정 위치 */
            top: 20px;
            right: 20px;
            background: rgba(0,0,0,0.8);
            color: #fff;
            border: 2px solid rgba(255,255,255,0.3);
            font-size: 2em;
            width: 50px;
            height: 50px;
            line-height: 46px;
            text-align: center;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1002; /* 더 높은 z-index */
            transition: all 0.3s ease;
        }

        .overlay-close-btn:hover {
            background: rgba(255,255,255,0.2);
            color: #000;
            border-color: rgba(0,0,0,0.5);
            transform: scale(1.1);
        }

        .time-flow-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .time-flow-overlay .image-wrapper {
            background-color: rgba(0, 0, 0, 0.95); /* 거의 검은 배경 */
            padding: 0; /* 패딩 제거 */
            border-radius: 0; /* 모서리 둥글게 제거 */
            box-shadow: none; /* 그림자 제거 */
            max-width: 100%; /* 전체 화면 너비 */
            max-height: 100%; /* 전체 화면 높이 */
            width: 100vw; /* 뷰포트 전체 너비 */
            height: 100vh; /* 뷰포트 전체 높이 */
            overflow: hidden; /* 스크롤 제거 */
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
        }

        .time-flow-overlay h3 {
            font-size: 1.8em;
            color: var(--text-color);
            margin-bottom: 20px;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            padding-bottom: 10px;
            text-align: center;
        }

        .time-flow-overlay img {
            max-width: 100vw; /* 뷰포트 전체 너비 */
            max-height: 100vh; /* 뷰포트 전체 높이 */
            width: auto; /* 자동 너비 */
            height: auto; /* 자동 높이 */
            border-radius: 0; /* 모서리 둥글게 제거 */
            box-shadow: none; /* 그림자 제거 */
            display: block;
            margin: 0 auto;
            object-fit: contain; /* 비율 유지하면서 맞춤 */
        }

        /*  버튼 그룹(범주) 스타일         */
        .btn-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;  /* 좌우 균형 배치 */
            gap: 12px;
            border: 2px solid var(--border-color);
            border-radius: 12px;
            margin-bottom: 8px;
            padding: 16px 14px;
            background: linear-gradient(135deg, var(--box-bg-color), var(--secondary-bg-color));
            box-shadow: 0 4px 12px var(--shadow-color);
        }
        
        .btn-group legend {
            padding: 0 12px;
            font-weight: 600;
            font-family: 'Georgia', serif;
            color: var(--text-color);
            background: var(--content-bg-color);
            border-radius: 6px;
            box-shadow: 0 2px 4px var(--shadow-color);
        }

        /* === ② 탭 카드를 그리드로 배치 === */
        .nav-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        list-style: none;
        margin: 0;
        padding: 0;
        }

        /* === ③ 카드 스타일 === */
        .nav-item {
        display: flex;
        flex-direction: column;
        background: var(--box-bg-color);
        border: 2px solid var(--border-color);
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 8px var(--shadow-color);
        }
        
        .nav-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px var(--shadow-color);
        }

        /* === ④ 카드 내 이미지 스타일 === */
        .nav-item img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        }

        /* === ⑤ 카드 내 텍스트 스타일 === */
        .nav-item h3 {
        margin: 12px 0 6px;
        color: var(--text-color);
        font-family: 'Georgia', serif;
        font-size: 1.1em;
        text-align: center;
        }
        
        .nav-item p {
        margin: 0 10px 15px;
        color: var(--text-color);
        font-size: 0.9em;
        text-align: center;
        line-height: 1.4;
        }


        /*  버튼 기본 스타일 재정의         */
        .toggle-btn {
            flex: 1 1 120px;               /* 최소 120px, 균등 확장 */
            max-width: 180px;
            margin: 6px 4px;
            padding: 12px 0;
            background: linear-gradient(135deg, var(--border-color), var(--box-bg-color));
            color: var(--text-color);
            font-family: 'Georgia', serif;
            font-size: 0.95em;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            box-shadow: 0 4px 8px var(--shadow-color);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .toggle-btn:hover {
            background: linear-gradient(135deg, var(--link-hover-color), var(--border-color));
            color: var(--tab-label-active-color);
            transform: translateY(-2px);
            box-shadow: 0 6px 12px var(--shadow-color);
        }

        /* Responsive Design Media Queries */

        /* Tablet and smaller desktops */
        @media (max-width: 1024px) {
            body {
                gap: var(--gap-mobile);
                /* Adjust sidebar width slightly */
                grid-template-columns: 30% 1fr;
            }

            header {
                font-size: 2.2em;
            }

            nav {
                margin: 0 var(--gap-mobile);
            }

            aside {
                grid-template-columns: 1fr; /* 태블릿 이하에서는 다시 1열 */
            }

            aside article {
                grid-column: auto;
            }

            main {
                margin-right: var(--gap-mobile);
                padding: var(--gap-mobile);
            }

            label {
                padding: 10px 15px;
                font-size: 0.95em;
                margin: 0 4px 8px 4px;
            }

            .content {
                padding: var(--gap-mobile);
            }

            .time-flow-overlay .image-wrapper {
                padding: var(--gap-mobile);
            }
        }


        /* Mobile devices */
        @media (max-width: 768px) {
            body {
                grid-template-columns: 1fr; /* Single column layout */
                grid-template-rows: var(--header-height) auto auto 1fr var(--footer-height); /* Nav, aside, main stack */
                grid-template-areas:
                    "header"
                    "nav"
                    "aside"
                    "main"
                    "footer";
                gap: var(--gap-mobile);
            }

            header {
                font-size: 1.8em; /* Smaller font size for header */
                line-height: normal; /* Allow height to adjust based on padding */
                padding: 10px;
                border-radius: 0; /* Remove rounded corners on smaller screens */
            }

            footer {
                border-radius: 0; /* Remove rounded corners on smaller screens */
            }

            nav {
                flex-direction: column; /* Stack nav labels vertically */
                align-items: stretch; /* Stretch labels to full width */
                padding: 10px;
                margin: 0; /* Remove horizontal margin */
                border-radius: 0;
            }

            label {
                margin: 5px 0; /* Vertical margin for stacked labels */
                border-radius: 8px; /* Full rounded corners for stacked labels */
                text-align: center;
                width: 100%; /* Make label take full width */
            }

            aside, main {
                padding: var(--gap-mobile);
                margin: 0; /* Remove side margins */
                border-radius: 0; /* Remove rounded corners */
            }

            main {
                grid-template-columns: 1fr; /* Stack articles vertically */
            }

            caption {
                font-size: 1.2em;
            }

            th, td {
                padding: 8px 10px; /* Smaller padding for table cells */
                font-size: 0.85em;
            }

            /* Adjust background for smaller screens to ensure visibility */
            body {
                background-size: auto 100%; /* Cover height, auto width */
                background-position: top center;
            }

            .time-flow-overlay .image-wrapper {
                max-width: 100vw;
                max-height: 100vh;
                width: 100vw;
                height: 100vh;
                padding: 0;
            }
            
            .time-flow-overlay img {
                max-width: 100vw;
                max-height: 100vh;
            }

            .overlay-close-btn {
                top: 15px;
                right: 15px;
                width: 45px;
                height: 45px;
                line-height: 41px;
                font-size: 1.8em;
            }

            .toggle-btn {
                padding: 8px 12px;
                font-size: 0.9em;
            }
        }

        @media (max-width: 480px) {
            header {
                font-size: 1.4em;
                padding: 8px;
            }

            .content {
                padding: 10px;
            }

            .box {
                margin: 8px auto;
                padding: 10px;
            }

            .box h2 {
                font-size: 1.1em;
            }

            table {
                font-size: 0.8em;
            }

            th, td {
                padding: 6px 8px;
            }

            .time-flow-overlay h3 {
                font-size: 1.3em;
            }

            .time-flow-overlay .image-wrapper {
                max-width: 100vw;
                max-height: 100vh;
                width: 100vw;
                height: 100vh;
                padding: 0;
            }
            
            .time-flow-overlay img {
                max-width: 100vw;
                max-height: 100vh;
            }

            .overlay-close-btn {
                top: 10px;
                right: 10px;
                width: 40px;
                height: 40px;
                line-height: 36px;
                font-size: 1.5em;
            }
        }

        .overlay-arrow-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0,0,0,0.6);
            color: #fff;
            border: none;
            font-size: 2.5em;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1001;
            transition: background 0.2s;
        }
        #overlay-prev-btn { left: 30px; }
        #overlay-next-btn { right: 30px; }
        .overlay-arrow-btn:hover { background: rgba(255,255,255,0.3); color: #000; }
        @media (max-width: 768px) {
            .overlay-arrow-btn { width: 40px; height: 40px; font-size: 1.5em; }
            #overlay-prev-btn { left: 10px; }
            #overlay-next-btn { right: 10px; }
        }
    </style>
</head>

<body>
    <header>
        <h1>삼국지 인물론</h1>
    </header>

    <nav class="tab-container">
        <ul class="nav-grid">
            <li>
                <button class="nav-item active" data-tab="tab1">
                    <img src="./images/samgukjiperson.png" alt="인물론" onerror="this.onerror=null; this.src='https://placehold.co/400x300/fff/000?text=No+Image';">
                    <h3>인물론</h3>
                    <p>삼국지 주요 인물들의 성격과 전략을 분석합니다.</p>
                </button>
            </li>
        </ul>
    </nav>

    <aside>
        <article>
            <h3>삼국지 인물론 소개</h3>
            <div class="box">
                <p>삼국지의 대표 인물들과 각 진영의 주요 인물들을 한눈에 살펴보세요.<br>각 인물 카드를 클릭하면 더 자세한 정보를 볼 수 있습니다.</p>
            </div>
        </article>
    </aside>

    <main>
        <article>
            <h2 style="display:flex; justify-content:center; text-align:center;">
                <button id="btn-cao-faction" style="font-size:1.2em; padding:10px 24px; border-radius:8px; background:linear-gradient(135deg,#8B4513,#A0522D); color:#fff; border:none; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.15); font-weight:bold;">조조 진영</button>
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 32px; justify-content: center;">
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukjiperson.png" alt="조조" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>군주</h3>
                    <p>조조<br>위나라의 창업자, 난세의 간웅</p>
                </div>
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukji12.png" alt="장료" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>장군</h3>
                    <p>장료<br>합비대전의 영웅, 위나라의 명장</p>
                </div>
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukji13.png" alt="곽가" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>모사</h3>
                    <p>곽가<br>조조의 책사, 지략의 귀재</p>
                </div>
            </div>
        </article>
        <article>
            <h2 style="display:flex; justify-content:center; text-align:center;">
                <button id="btn-sun-faction" style="font-size:1.2em; padding:10px 24px; border-radius:8px; background:linear-gradient(135deg,#228B22,#6B8E23); color:#fff; border:none; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.15); font-weight:bold;">손권 진영</button>
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 32px; justify-content: center;">
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukji14.png" alt="손권" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>군주</h3>
                    <p>손권<br>오나라의 군주, 강동의 호랑이</p>
                </div>
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukji17.png" alt="주유" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>장군</h3>
                    <p>주유<br>적벽대전 지휘관, 오나라의 명장</p>
                </div>
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukji19.png" alt="노숙" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>모사</h3>
                    <p>노숙<br>오나라의 책사, 외교의 달인</p>
                </div>
            </div>
        </article>
        <article>
            <h2 style="display:flex; justify-content:center; text-align:center;">
                <button id="btn-liu-faction" style="font-size:1.2em; padding:10px 24px; border-radius:8px; background:linear-gradient(135deg,#A0522D,#D2691E); color:#fff; border:none; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.15); font-weight:bold;">유비 진영</button>
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 32px; justify-content: center;">
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukjiandyanyi.png" alt="유비" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>군주</h3>
                    <p>유비<br>촉한의 황제, 인의의 화신</p>
                </div>
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukji23.png" alt="관우" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>장군</h3>
                    <p>관우<br>의리의 화신, 오관참육장</p>
                </div>
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukji24.png" alt="제갈량" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>모사</h3>
                    <p>제갈량<br>촉한의 재상, 지략의 대명사</p>
                </div>
            </div>
        </article>
        <article>
            <h2 style="display:flex; justify-content:center; text-align:center;">
                <button id="btn-etc-faction" style="font-size:1.2em; padding:10px 24px; border-radius:8px; background:linear-gradient(135deg,#4682B4,#708090); color:#fff; border:none; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.15); font-weight:bold;">기타 진영</button>
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 32px; justify-content: center;">
                <div class="nav-item" style="width:220px;">
                    <img src="./images/guandubattle.png" alt="원소" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>군주</h3>
                    <p>원소<br>관도대전의 주역, 북방의 군웅</p>
                </div>
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukji13.png" alt="여포" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>장군</h3>
                    <p>여포<br>삼국최고의 무장, 배신의 아이콘</p>
                </div>
                <div class="nav-item" style="width:220px;">
                    <img src="./images/samgukji05.png" alt="진궁" onerror="this.onerror=null; this.src='https://placehold.co/220x150/fff/000?text=No+Image';">
                    <h3>모사</h3>
                    <p>진궁<br>여포의 책사, 비운의 참모</p>
                </div>
            </div>
        </article>
    </main>

    <footer>
        저작권&copy;2025 김우성 /
        <a href="https://naver.com" target="_blank">네이버</a>
        <a href="https://chatgpt.com/" target="_blank">ChatGPT</a>
        <a href="https://gemini.google.com/" target="_blank">Gemini</a>
    </footer>

    <!-- 시대 흐름 내용을 오버레이로 변경 -->
    <div id="time-flow-overlay" class="time-flow-overlay">
        <button id="overlay-prev-btn" class="overlay-arrow-btn" aria-label="이전">&#8592;</button>
        <button id="overlay-close-btn" class="overlay-close-btn" aria-label="닫기">×</button>
        <button id="overlay-next-btn" class="overlay-arrow-btn" aria-label="다음">&#8594;</button>
        <div class="image-wrapper">
            <img id="overlay-display-image" src="samgukji02.png" onerror="this.onerror=null; this.src='https://placehold.co/800x450/fff/000?text=이미지+로드+실패';" alt="확대 이미지">
        </div>
    </div>

    <!-- 조조 진영 오버레이 모달 -->
    <div id="cao-faction-overlay" class="time-flow-overlay">
        <button id="cao-faction-overlay-close-btn" class="overlay-close-btn" aria-label="닫기">×</button>
        <div class="image-wrapper">
            <img src="./images/samgukjiperson.png" alt="조조 진영 대표 이미지" style="max-width:90vw; max-height:80vh; border-radius:12px; box-shadow:0 8px 32px rgba(0,0,0,0.4);">
            <h3 style="color:#fff; margin-top:20px;">조조 진영 대표 이미지</h3>
        </div>
    </div>
    <!-- 손권 진영 오버레이 모달 -->
    <div id="sun-faction-overlay" class="time-flow-overlay">
        <button id="sun-faction-overlay-close-btn" class="overlay-close-btn" aria-label="닫기">×</button>
        <div class="image-wrapper">
            <img src="./images/samgukji14.png" alt="손권 진영 대표 이미지" style="max-width:90vw; max-height:80vh; border-radius:12px; box-shadow:0 8px 32px rgba(0,0,0,0.4);">
            <h3 style="color:#fff; margin-top:20px;">손권 진영 대표 이미지</h3>
        </div>
    </div>
    <!-- 유비 진영 오버레이 모달 -->
    <div id="liu-faction-overlay" class="time-flow-overlay">
        <button id="liu-faction-overlay-close-btn" class="overlay-close-btn" aria-label="닫기">×</button>
        <div class="image-wrapper">
            <img src="./images/samgukjiandyanyi.png" alt="유비 진영 대표 이미지" style="max-width:90vw; max-height:80vh; border-radius:12px; box-shadow:0 8px 32px rgba(0,0,0,0.4);">
            <h3 style="color:#fff; margin-top:20px;">유비 진영 대표 이미지</h3>
        </div>
    </div>
    <!-- 기타 진영 오버레이 모달 -->
    <div id="etc-faction-overlay" class="time-flow-overlay">
        <button id="etc-faction-overlay-close-btn" class="overlay-close-btn" aria-label="닫기">×</button>
        <div class="image-wrapper">
            <img src="./images/guandubattle.png" alt="기타 진영 대표 이미지" style="max-width:90vw; max-height:80vh; border-radius:12px; box-shadow:0 8px 32px rgba(0,0,0,0.4);">
            <h3 style="color:#fff; margin-top:20px;">기타 진영 대표 이미지</h3>
        </div>
    </div>
<script>
(function() {
    let currentList = [];
    let currentIdx = 0;
    const aside = document.querySelector('aside');
    const overlay = document.getElementById('time-flow-overlay');
    const img = document.getElementById('overlay-display-image');
    const prevBtn = document.getElementById('overlay-prev-btn');
    const nextBtn = document.getElementById('overlay-next-btn');
    const closeBtn = document.getElementById('overlay-close-btn');

    function show(idx) {
        if (!currentList.length) return;
        img.src = currentList[idx].src;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideOverlay() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    aside.addEventListener('click', function(e) {
        const btn = e.target.closest('button.toggle-btn');
        if (!btn) return;
        const fieldset = btn.closest('fieldset');
        const btns = Array.from(fieldset.querySelectorAll('button.toggle-btn'));
        currentList = btns.map(b => ({ src: b.dataset.imageSrc }));
        currentIdx = btns.indexOf(btn);
        show(currentIdx);
    });
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIdx = (currentIdx - 1 + currentList.length) % currentList.length;
        show(currentIdx);
    });
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIdx = (currentIdx + 1) % currentList.length;
        show(currentIdx);
    });
    closeBtn.addEventListener('click', function() {
        hideOverlay();
    });
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            hideOverlay();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideOverlay();
        }
    });

    // 조조 진영 오버레이
    const btnCao = document.getElementById('btn-cao-faction');
    const overlayCao = document.getElementById('cao-faction-overlay');
    const closeCao = document.getElementById('cao-faction-overlay-close-btn');
    btnCao.addEventListener('click', function() {
        overlayCao.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    closeCao.addEventListener('click', function() {
        overlayCao.classList.remove('active');
        document.body.style.overflow = '';
    });
    overlayCao.addEventListener('click', function(e) {
        if (e.target === overlayCao) {
            overlayCao.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            overlayCao.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // 손권 진영 오버레이
    const btnSun = document.getElementById('btn-sun-faction');
    const overlaySun = document.getElementById('sun-faction-overlay');
    const closeSun = document.getElementById('sun-faction-overlay-close-btn');
    btnSun.addEventListener('click', function() {
        overlaySun.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    closeSun.addEventListener('click', function() {
        overlaySun.classList.remove('active');
        document.body.style.overflow = '';
    });
    overlaySun.addEventListener('click', function(e) {
        if (e.target === overlaySun) {
            overlaySun.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // 유비 진영 오버레이
    const btnLiu = document.getElementById('btn-liu-faction');
    const overlayLiu = document.getElementById('liu-faction-overlay');
    const closeLiu = document.getElementById('liu-faction-overlay-close-btn');
    btnLiu.addEventListener('click', function() {
        overlayLiu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    closeLiu.addEventListener('click', function() {
        overlayLiu.classList.remove('active');
        document.body.style.overflow = '';
    });
    overlayLiu.addEventListener('click', function(e) {
        if (e.target === overlayLiu) {
            overlayLiu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // 기타 진영 오버레이
    const btnEtc = document.getElementById('btn-etc-faction');
    const overlayEtc = document.getElementById('etc-faction-overlay');
    const closeEtc = document.getElementById('etc-faction-overlay-close-btn');
    btnEtc.addEventListener('click', function() {
        overlayEtc.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    closeEtc.addEventListener('click', function() {
        overlayEtc.classList.remove('active');
        document.body.style.overflow = '';
    });
    overlayEtc.addEventListener('click', function(e) {
        if (e.target === overlayEtc) {
            overlayEtc.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ESC 키로 닫기 (공통)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            overlayCao.classList.remove('active');
            overlaySun.classList.remove('active');
            overlayLiu.classList.remove('active');
            overlayEtc.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
})();
</script>
</body>
</html>
