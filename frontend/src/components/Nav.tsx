"use client";

import styled from "styled-components";
import { Text, Margin } from "../styles/ui";
import Image from "next/image";
import originProfile from "/public/share/origin-profile.svg";

const Style = {
    Wrapper: styled.div`
        width: 295px;
        height: 918px;
        padding: 47px 28px;
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #dfd6de;
        border-radius: 0px 0px 20px 20px;
    `,
    HoverBox: styled.div`
        width: 228px;
        height: 33px;
        padding: 8px 15px;
        :hover {
            margin: 0px;
            width: 228px;
            height: 33px;
            background-color: #fff5f5;
            border-radius: 8px;
            color: #674188;
            cursor: pointer;
        }
    `,
};

const Profile = {
    Wrapper: styled.div`
        display: flex;
        align-items: center;
    `,
};

const MainMenu = {
    Wrapper: styled.div`
        width: 228px;
        height: 182px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-top: 1px solid #947ea8;
        border-bottom: 1px solid #947ea8;
    `,
};

const RecentBox = {
    Wrapper: styled.div``,
    ShowRecentItems: styled.div`
        width: 228px;
        height: 132px;
        border: 1px solid red;
    `,
};

export default function Nav() {
    return (
        <>
            {/* <Style.Wrapper>
                <div>
                    <Profile.Wrapper>
                        <Image src={originProfile} alt="profile" width={28} height={28} />
                        <Margin direction="row" size={20} />
                        <Text.Body1>ZUITOPIA</Text.Body1>
                    </Profile.Wrapper>
                    <Margin direction="column" size={36} />
                    <Text.Body1>MAIN</Text.Body1>
                    <Margin direction="column" size={11} />
                    <MainMenu.Wrapper>
                        <Style.HoverBox>SEARCH</Style.HoverBox>
                        <Style.HoverBox>ITEMS</Style.HoverBox>
                        <Style.HoverBox>MAGAZINE</Style.HoverBox>
                        <Style.HoverBox>WISH LIST</Style.HoverBox>
                    </MainMenu.Wrapper>
                    <Margin direction="column" size={11} />
                    <Text.Body1 pointer>ADD</Text.Body1>
                </div>
                <RecentBox.Wrapper>
                    <Text.Body1>RECENT</Text.Body1>
                    <RecentBox.ShowRecentItems></RecentBox.ShowRecentItems>
                </RecentBox.Wrapper>
            </Style.Wrapper> */}

            <div>
                <div>
                    <div>프로필사진</div>
                    <div>ZUITOPIA</div>
                </div>
                <div>
                    <div>MAIN</div>
                    <div>
                        <div>SEARCH</div>
                        <div>ITEMS</div>
                        <div>MEGAZINE</div>
                        <div>WISH LIST</div>
                    </div>
                </div>
                <div>ADD</div>
                <div>
                    <div>RECENT</div>
                    <div>박스</div>
                </div>
            </div>
        </>
    );
}
