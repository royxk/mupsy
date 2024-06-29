import React from "react";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const timelineData = [
  {
    period: "~Present",
    events: [
      { year: 2024, text: "그로잉 살롱 세미나" },
      { year: 2024, text: "유튜버 채린 헤어메이크업" },
      { year: 2024, text: "유튜버 융덕 헤어메이크업" },
      { year: 2024, text: "가수 윤마치 헤어메이크업" },
      { year: 2024, text: "가수 드비타 헤어메이크업" },
      { year: 2024, text: "동국대 강의" },
      { year: 2024, text: "인플루언서 박보성 등 유명 인플루언서 헤어메이크업" },
      { year: 2024, text: "유튜버 유혜주 헤어메이크업" },
      { year: 2024, text: "유튜버 달씨 헤어메이크업" },
      { year: 2024, text: "유튜버 감스트 헤어메이크업" },
      { year: 2024, text: "유튜버 아란티비 헤어메이크업" },
      { year: 2024, text: "부산외대 시상" },
      { year: 2024, text: "부산외대 강의" },
    ],
  },
  {
    period: "2023",
    events: [
      { year: 2023, text: "동국대 강의" },
      { year: 2023, text: "삼성예술고 강의" },
      { year: 2023, text: "경남경영자협회 노동부 강의" },
      { year: 2023, text: "멉씨 부산 본점 확장이전" },
      { year: 2023, text: "고운빛깔 브랜드 콜라보" },
      { year: 2023, text: "야구선수 해설자 김민수 이대형 헤어메이크업" },
      { year: 2023, text: "가수 신용재 헤어메이크업" },
      { year: 2023, text: "가수 허각 헤어메이크업" },
      { year: 2023, text: "가수 임한별 헤어메이크업" },
      { year: 2023, text: "유튜버 폭스클럽 헤어메이크업" },
      { year: 2023, text: "화장품 브랜드 HONISY 런칭" },
      { year: 2023, text: "가수 한요한 헤어메이크업" },
      { year: 2023, text: "가수 릴보이 헤어메이크업" },
      { year: 2023, text: "뮤지컬 레미재라블 광고 촬영 헤어메이크업" },
      { year: 2023, text: "Kbs 뉴스 헤어메이크업" },
      { year: 2023, text: "멉씨 서울점 오픈" },
    ],
  },
  {
    period: "2022",
    events: [
      { year: 2022, text: "배우 손준호 메이크업헤어" },
      { year: 2022, text: "배우 김소현 메이크업헤어" },
      { year: 2022, text: "배우 길병민 메이크업헤어" },
      { year: 2022, text: "30만 유튜버 브라도 커플 메이크업헤어" },
      { year: 2022, text: "800만 인플루언서 레미니씬 헤어메이크업" },
      { year: 2022, text: "셀카 어플 1등 NAVER snow 멉씨 필터 제작" },
      {
        year: 2022,
        text: "유명 인플루언서 헤어메이크업 묘정 혜민 김현지 쇼니 김선영 민서공이 공지원",
      },
      { year: 2022, text: "스걸파 헤어메이크업" },
      { year: 2022, text: "부산 최대 쇼호스터 이미지컨설팅 정규수업진행" },
      { year: 2022, text: "보험회사 이미지컨설팅 수업진행" },
      { year: 2022, text: "끌리매 콜라보" },
      { year: 2022, text: "러블리마켓 입점 메이크업샵" },
      { year: 2022, text: "제나 성형외과 제휴 협약" },
      { year: 2022, text: "원클리닉 제휴협약" },
      { year: 2022, text: "Cj 올리브영 최초 퍼스널 컬러 입점" },
      { year: 2022, text: "Cj 올리브영 퍼스널컬러강의" },
      { year: 2022, text: "성시경 헤어메이크업 일본출장" },
      { year: 2022, text: "Mbc 새치혀 헤어메이크업" },
      { year: 2022, text: "도쿄 k beauty 세미나 진행" },
      { year: 2022, text: "서울 패션위크 진행" },
      { year: 2022, text: "벤츠 vip 퍼스널강의 진행" },
      { year: 2022, text: "아침마당 미스터트롯 트로트가수 메이크업진행" },
      { year: 2022, text: "벨포스 클럽 콜라보" },
      { year: 2022, text: "논모르드 클럽 콜라보" },
      { year: 2022, text: "각종 유명 카페와 콜라보" },
    ],
  },
  {
    period: "2021",
    events: [
      { year: 2021, text: "한국 최초 메이크업샵 백화점 입점 2호점 오픈" },
      { year: 2021, text: "원장님 미미박스 모델" },
      { year: 2021, text: "부산시장 박형준 헤어메이크업" },
      { year: 2021, text: "릴체리 헤어메이크업" },
      { year: 2021, text: "골드부다 헤어메이크업" },
      { year: 2021, text: "200만 유튜버 나름 콜라보방송진행" },
      { year: 2021, text: "200만 틱토커 전지영 헤어메이크업" },
      { year: 2021, text: "스우파 효진초이 메이크업 헤어" },
      {
        year: 2021,
        text: "지스타 임선비 공대생 등 유명 골드버튼 유튜버 헤어메이크업진행",
      },
      {
        year: 2021,
        text: "석다예 근정 등등 유명 틱톡커 인플루언서 헤어메이크업 진행",
      },
      { year: 2021, text: "전국미시즈 대회 심사위원" },
      { year: 2021, text: "고프로 협업 메이크업헤어" },
    ],
  },
  {
    period: "2020",
    events: [{ year: 2020, text: "멉씨 부산본점 창립" }],
  },
];

const Timeline = () => {
  const [expandedPeriods, setExpandedPeriod] = useState({});
  const togglePeriod = (period) => {
    setExpandedPeriod((prev) => ({
      ...prev,
      [period]: !prev[period],
    }));
  };

  return (
    <div className="flex flex-col gap-10 items-center w-full h-full p-5 min-h-screen tab:p-10">
      <div className="text-center text-4xl font-bold">HISTORY</div>
      {timelineData.map((section, index) => (
        <div
          key={index}
          className="justify-between flex w-[300px] gap-5 tab:gap-20 flex-row"
        >
          <div className="w-[80px] tab:w-[120px] text-xl tab:text-4xl font-bold text-pink-300">
            {section.period}
          </div>
          <div className="flex flex-col">
            {section.events
              .slice(
                0,
                expandedPeriods[section.period] ? section.events.length : 4
              )
              .map((event) => (
                <div className="content-center flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-pink-300 w-2 h-2 rounded-full"></div>
                    <div className="w-px h-full bg-pink-300"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm tab:text-xl font-semibold">
                      {event.year}
                    </div>
                    <div className="text-sm tab:text-lg text-gray-700">
                      {event.text}
                    </div>
                  </div>
                </div>
              ))}

            {section.events.length > 4 && (
              <button
                className="mt-4 text-pink-300 font-semibold"
                onClick={() => togglePeriod(section.period)}
              >
                {expandedPeriods[section.period] ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
