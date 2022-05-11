
import {React, useState} from "react"
import "./header.css"
import data from "../../Data.json";
import { Bottom_header } from "./Bottom_header"

export const Header = () =>{

    const [filderedDate, setfilderedData] = useState([])
    const [modalOpen, setModalOpen] = useState(false);


    const handleFilter = (event) =>{
        const searchWord = event.target.value;
        const newFilter = data.filter((value=>{
            return value.title.toLowerCase().includes(searchWord);
        }));

        if(searchWord == ""){
            setfilderedData([]);
        }
        else{

            setfilderedData(newFilter)
        }
    }

    return (
    <div className="main_header">
        <div className="inner_header_top">
            <div className="header_top">
                <span>GD - US$</span>
                <span>Help <img src="https://raw.githubusercontent.com/surajahirwar/surajahirwar/main/down-arrow.png" /></span>
                <span>Sing in</span>
                <button>Join</button>
    
            </div>
        </div>
        <div className="inner_header_bottom">
            <div className="headder__bottom_img">
                <img src="data:image/png;base64,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" />
            </div>
            <div className="header_bottom">
            <span className="woman" onClick={() => {
                            setModalOpen(!modalOpen);
                                         }}>WOMAN</span>
                    <span onClick={() => {
                            setModalOpen(!modalOpen);
                                         }} >MEN</span>
                    <div className="header_bottom_search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" onChange={handleFilter} placeholder='Search (e.g. "Valentino dresses")'/>
                    {filderedDate.length !=0 && (
                    <div className="append_div">
                        
                        {filderedDate.slice(0,8).map((value, key)=>{
                            return <div className="innter_append_div">
                                <img src={value.Image}></img>
                                    <span>{value.title}</span>
                                    </div>
                        })}
                        </div>
                        )}
             </div>
            </div>
        </div>
        {modalOpen && <Bottom_header/>}
        <div className="media_div">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAADNCAMAAABXRsaXAAAAaVBMVEUAAAD////6+vrw8PAfHx8cHBz19fXn5+czMzNSUlLz8/MRERE2NjYiIiJsbGzGxsZ1dXW/v7/W1tZ/f3/Jyck1NTWurq5zc3NoaGgtLS21tbVfX1/j4+M9PT3BwcFaWlpOTk6Hh4eVlZXOBACRAAAD7UlEQVR4nO2d63aqMBBGC2i4KCJgsfTUS33/h+zpsoYkBPWHZNaab/YTfHvVJiGZTN4iRN6oA5Ag1gZFwoPiWeuk2/erNy6s+n2XPLSuc+qcM5DXd62rjDrgTPTHSWu1oQ43Ix/Kb50uqZPNyjL1WTfUsWanGVun1JkCkLrWakEdKQBL5VhzHsgGPmzrijpPII6WNdd52iUzrWvqNMGoDWuOy1A/+WCdUGcJSKKtO+ooAem09ZY6SkD22hplBP+l19Z8NhEes7pZK+okQSn+rJGG8Osgjve3VtD/19GaOkpA3rV1Sx0lIK22/qSOEpBPbY00nBXDN9c/6izBOBlfmjvqMMGozL2UA3WaQBysHST+m+FXGnuPFGPyap2d4RjhN76OHeuooI4UAH2QPZxzpexX41/R2DpSvH/kB6Nawzq1/6ZONiPfcTRhHTVcN8bzxvJ061KaPXXAGdg0jqWn8qq65Fm54EGZ5ZfjWHGyyi7mwJSc1BbiINY4iDUOYo2DWOMg1jiINQ5ijYNY4yDWOIg1DmKNg1jjINY4iDUOYo2DWOMg1jiINQ4T1tQlUy/jWeukbvOSuhrwZZR5W6cPrXcn6pwzcKruWu+4Fkuvd9PWnDsNbCesU96tkPydvr4Qb0BAdvqK36kjBSBzbzZxvAIwZmNbo1xP3VnWXOdpl7VpfaROEwyz0xfkrXOkNjFDpy/MbhKc198uW22NsEK5kWlr9itwA9BOX7fuT0hDuHT6ok4SEMxOXxn4fI25NkMaxId1OOY3F+j3NeZeCui+GcjktXd2hmOElcpoPxzz7APgnGvl7fSV8qlQ8FF6zzQj3s0Lp86vI8a1Coc7tQq/3hwXp6edY+mrQfo+9dQ5X0Z/auvHrw3+QV0m9jL8elJbiINY4yDWOIg1DmKNg1jjINY4iDUOYo2DWOMg1jiINQ5ijYNY4yDWOIg1DmKNg1jjINY4TFlTV0y9iKet4+Pl3JdLHpT9+VKP3UcVlRvqasAZ+LhfUdmcqQPOxHn6ndyYc6V0O/EmcsH76sc68Vl/UceaHc8NCIS7mqN37TFvNnEeyAa2tnVDnScQjWXN9ZaLy8G0rqjTBKMyrDle7PFj3DpHaphSaGvMbhIY09aVVlsjrFBuSKcvIKTTFw4F9P91lFFHCUivrTGapVwZOn111FEC0mlrpEHc6PTF8ZEPP7nxpVlThwmG1ekLpeduZu0goXT6quw9Uo6HemOc1xAixbsJ0pWFcqxRO33x3xIfTnNxOn0tJjp9Kc5D2kZFfuv/ExjXeTuzX2Nz61JqjovTvHYsPZ2+um3GZ5thlW27pzt9qYQHyq8ntYU4YFr/ACZxfL6iNSmvAAAAAElFTkSuQmCC"></img>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAB+CAMAAAA9WLe4AAAAdVBMVEUAAAD///91dXXo6Oizs7PDw8PKysry8vJKSkrR0dH7+/umpqbk5OScnJy5ublaWlqWlpaGhoZiYmJubm7Y2NiRkZEuLi59fX1DQ0M5OTkYGBjt7e0lJSWtra2YmJhBQUFbW1tSUlIcHBw0NDQODg56enpoaGjmcP6qAAAIMElEQVR4nO2d7XqiMBCFtWK1Aipq/Vhrq9tu7/8St9aqARJyZpJUhyfnt4wJLxOSyWTodNuv7HG8S1ezw3D99r5cbtbDybzId0l/Mbh1yzTq3LoBQTUY57M/nQa9rXZPt25kWe0FkiX/mlAoWhb9Wzf2qs4DrPmi0dJoBprJ7K1azDFbM6OBZxDGWbPxyN6sDGyWiyiNtjxHe9DMwd7zJWjqQXv1YErp1UXrxNasJ5bdcLIAyVA71lG7j1rSvZUXc17vjspbBaQ7Ae2824B8gIZW9UuzA7d3JxVNMy9pQBaeDCWondrNGzh4x1nP7QHSRZ/OP81m0PbUHKRgdqzSOuPkRRwQuMGNr88ctVJxkC06FbDqX1uAdN9QUw02RqiNioOMeZ3SSz81lwfkETWVmm3A407ZQdBVIKhxO4DACwiziwxQC2UHQWd4sHSPjEAg8ArCOJeB50klB9nwekRsoUAg3RfUmCFSAa8uSw7i7XWuqk5EIhDYRTSLuqPgoUd1kCGvPzbVRi2JQLqN0W5VW93V8NqyUC6a8bpjV3VBIhIIPPuc666G3wWKg6S83iBqAxB4na2b68MDnuIgPVZfMFXC+zKBwJGoSf1aeLxTHASeRnBU7rJMILiL1GJGMEvFQeBAC09tALJD7b2xUV7nzHCghalpC4Dg9/WxfB38sCsOsmL1hKA2AIGnPX+ZIK8OsmV1hCJ1E1EqEPzOlkJ4cFRRcRBqLgNDbQCCv2iVi+Coohp14XSDKGVcFQsEv09KdAJOgFEcxOseiEHKbpVcIK+wzcsl+PpOcRDHjAZMbQCCu8jr+Yo9ekXB+RsXXccswUDwl+3P8w5HFVUHgTcoTzqs0l2SJLsVHBD41uWZkQwEX6/9PPDwbrzqIJQMxbXa+h5lw3fTBiCEjJwB7VlXN7YI+1LVPfIFIQTWCiD4JPY7P/cv+mvVQQivEE0+Ik7kEnOTDIQQ0+hRpq+qg+DQdTkk8Gbx9WrRQPC7tSc86iUHwcc5bQvhdIrLYkk0EHyh18nwPb9SagQcVtZuTuI8L4ceZAPB4354TlU5EQTmaDhlgF6+bgcQfEjAVc4dguMBhjzJd/T6lgDxv9ldyZSCp9aGk2+f6PUtAeI/PaeSXIe/pfTtg68/X0CMDAQXFQg+scRUTSXEx8Q9seUc4e6jTeQ+i3JDyIeHPWdAV7NPCdu3E+CMraNw92k8HUO5IWQgeMQQUS3XlrRd+KzNlPQoCUD87lfUHnJiyuJy+qhroy+JAOJzWlJPRmfkkA7zcY/cC0wigOBRdbvqbwE4r66iYd4P8EqRAcTfRNH3+ZlJnjSXCgnX1VsCwVfDNrk2XquXIvE2ggkBAuezW6Q9AufH9OfOi6sIAeIrOV1re+/H9pceGhdrkKQA8eMi+jOicPwd0Tp1G72kAMHPfDRJb9p3+PIldSj6JwaIj+xC0yFqD6YrWrPHLjFAfNw1k2lepTKLnnmLFDlAuOu3q4xVBgId12EhkQPE3UXMpkklCglqqMVikiAgrpOhqdl0sAM7G/KUSxAQVxdpMh3uxI61JGZFkoC4He1/bbTtZLpR+pKnRkkC4nbXmk0HTDyonRJulCggLofJmx3EV6FFrUhERAFxcRGr7bWDcYuGhC7KAoKfcavK5iDdoMU1PvEuygLCdxHEeEAi+FxLGBDu9BRwkK8Fe5CKcicBnw44SRgQbpADNL9nmrfrBe2hMCDMyZClOv5VQcKM39qBLZAGBD/Aowq33wtQmPQkMNIoDQirbg/sIEd53T9UBL3GBALhuAjxLwKNW9ifiwPCCJWTHOSoUZBlO7aJKA8IPVTO+Zedt0ywi6wfoPmWPCDkM25kBzlpm8On3kFBr3WBQKhJIvx/2u685t1DY5ZAIMQzbkwHOavv731i+sBLSRKB0M64uf7bl0smhZesMKgpEoGQzrgx8gx0GvVf3c9EIH8kEgjljJvznynqjXOn845INrZIIJTFofOfVbUdv3L3spC3egTCUpZw3vXI8BmBsJWl1LcKMuG7ARD3Q6z3AeTYENqGWWG3eAsgE8pnqLX5uHcDpEvboEFStG4AhKS17t98AiGcBNKPOIQpn/G77YKAaDNobgTE8AEyPMfuYOcRgRBSFjcGE/AmY/SQjh0IJQ5jMAEnVLbhHRIcCCWPxbCOgNP37nSWRVJwIKSm6y3s0cuRbfUI5INgTH8oDr78TlfqJIUHQtqDetIYwI+t3Gksi6TwQGiL7XrAlrDHf6fRXpLCAyHmYVVXhx5maRFISeQCgs9KnYaMFPSNQDrITaA36s88TfqP/ZSYRYmsCyMQj7W4bILyrSMQh2NZREH1tCKQ36v8jfCIQEI2viz91y4ikLqCf5n4JGzrOgL5tTEL4hGBBG29KiTUG4Gc5FZEBRRYND4C6QYrYFYSWoMmAjnqF17raF3MCIRqkCdDgkQEYlDAWkCUZkQg4Ttwkm5jKwJpko+ywGYRqspFID/y/i04Rdj52wjkl7oAV9WIQEoKViq2QyoVG4FcFCqkRfusSATCuRcUwaXLqI1oPxDPH0w8iVraOgJRtfVzHv2qd/KXRCKQsvx+5hWq3VBWBFKRxxXiB74+vyoCqWrkK/QLlpCrKAKpq7f30PCC+RXQCESn7NOx2Tn7o6wRiF6jlF/n+uDyNcN7B6I9aPk759TplRqOmiRuXyzGTwU3ZqZ2eoGkTw0gGHC6O91+Tik0s566lw0ZwT1rBB+8YMINlY2nE9v49TJPx8QYSVi1GciPsqd+ssuLh9lh+LZZLjfr4WQ2fyjSpP/k8GHPUPoPCR98pLy3f0gAAAAASUVORK5CYII=" />
               <img src="https://cdn3.iconfinder.com/data/icons/business-finance-line-5/32/client-2-512.png"></img>

            
        </div>
       </div>
    )

}

