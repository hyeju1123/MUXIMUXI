import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./Login.module.css";
import NaverLoginIcon from "../../images/icons/naverLoginIcon.png";
import Link from "next/link";

const inter = Inter({
	variable: "--inter-font",
	subsets: ["latin"],
});

export default function LoginPage() {
	return (
		<main className={inter.variable}>
			<div className={styles.blockWithoutNav}>
				<div className={styles.loginBox}>
					<p className={styles.loginText}>로그인</p>
					<form className={styles.formBox}>
						<input
							type="email"
							placeholder="아이디를 입력해주세요"
							className={styles.inputBox}
						/>
						<input
							type="password"
							placeholder="비밀번호를 입력해주세요"
							className={styles.inputBox}
						/>
						<input
							type="submit"
							value="로그인"
							className={styles.submitButton}
						/>
					</form>
					<div>
						<Image
							src={NaverLoginIcon}
							width={40}
							height={40}
							alt="Naver Login Icon"
						/>
					</div>
					<div className={styles.otherServiceBox}>
						<div className={styles.serviceTextBox}>
							<p className={styles.questionText}>
								계정이 없으신가요?
							</p>
							<p className={styles.buttonText}>
								<Link href="/signUp">회원가입 하러가기</Link>
							</p>
						</div>
						<div className={styles.serviceTextBox}>
							<p className={styles.questionText}>
								비밀번호를 잊으셨나요?
							</p>
							<p className={styles.buttonText}>비밀번호 찾기</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
