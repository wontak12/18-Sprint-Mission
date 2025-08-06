import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/addItem.css";
import logo from "../images/logo/logo.svg";
import profile from "../images/profile.svg";
function AddItem() {
	const [img, setImg] = useState(null);
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImg(URL.createObjectURL(file));
		}
	};

	const deleteImg = () => {
		setImg(null);
	};
	const location = useLocation();
	const path = location.pathname;
	// if (path === "/addItem") {
	// 	const marketAncker = document.getElementById("marketAncker");
	// 	marketAncker.style.color = "#3692FF";
	// }
	console.log(location.pathname);
	return (
		<div>
			<header>
				<div className="headerLeft">
					<Link to="/" aria-label="홈으로 이동">
						<img src={logo} alt="판다마켓 로고" width="153" />
					</Link>
					<Link className="headerAncker" to="/board">
						자유게시판
					</Link>
					<Link
						className={`headerAncker ${path === "/addItem" ? "active" : ""}`}
						id="marketAncker"
						to="/market"
					>
						중고마켓
					</Link>
				</div>
				<Link>
					<img src={profile} alt="" />
				</Link>
			</header>
			<div className="addItemBody">
				<div className="addItemTitleBox">
					<p className="addItemTitle">상품 등록하기</p>
					<button>등록</button>
				</div>
				<div className="addItemTitle textStart itemImgTitle">상품 이미지</div>
				<div className="itemApply">
					{/* 숨겨진 파일 input */}
					<input
						type="file"
						id="fileInput"
						accept="image/*"
						style={{ display: "none" }}
						onChange={handleFileChange}
					/>
					{/* 버튼 */}
					<label htmlFor="fileInput" className="applyBtn">
						<div className="plus-icon"></div>
						<div className="imgApplyText">이미지 등록</div>
					</label>

					{img && (
						<div className="previewContainer">
							<img src={img} alt="preview" className="previewImg" />
							<button onClick={deleteImg} className="closeBtn">
								×
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default AddItem;
