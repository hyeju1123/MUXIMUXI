"use client";

import styled from "styled-components";
import { Text, Margin } from "../styles/ui";

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
	Profile: styled.div`
		display: flex;
		align-items: center;
	`,
	MainMenu: styled.div`
		width: 228px;
		height: 182px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		border-top: 1px solid #947ea8;
		border-bottom: 1px solid #947ea8;
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
	RecentBox: styled.div``,
	ShowRecentItems: styled.div`
		width: 228px;
		height: 132px;
		border: 1px solid red;
	`,
};

export default function Nav() {
	return (
		<>
			<Style.Wrapper>
				<div>
					<Style.Profile>
						<img src="/default-profile.svg" alt="profile" />
						<Margin direction="row" size={20} />
						<Text.Body1>ZUITOPIA</Text.Body1>
					</Style.Profile>
					<Margin direction="column" size={36} />
					<Text.Body1>MAIN</Text.Body1>
					<Margin direction="column" size={11} />
					<Style.MainMenu>
						<Style.HoverBox>SEARCH </Style.HoverBox>
						<Style.HoverBox>ITEMS</Style.HoverBox>
						<Style.HoverBox>MAGAZINE</Style.HoverBox>
						<Style.HoverBox>WISH LIST</Style.HoverBox>
					</Style.MainMenu>
					<Margin direction="column" size={11} />
					<Text.Body1 pointer>ADD</Text.Body1>
				</div>
				<Style.RecentBox>
					<Text.Body1>RECENT</Text.Body1>
					<Style.ShowRecentItems></Style.ShowRecentItems>
				</Style.RecentBox>
			</Style.Wrapper>
		</>
	);
}
