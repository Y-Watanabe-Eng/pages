import '../style.css'
import aws_infra from "/img/aws_Infra.png";
import Github from "/icon/github-mark-white.svg";

export const AppL = () => {

  return (
    <div>

      <div className='appLR'>
        <span>Terraform × AWS WEB基盤構築</span>
      </div>

      <div className='appLR'>
        <img src={aws_infra} alt="aws_infra" href="https://github.com/Y-Watanabe-Eng/aws_infra/"
          target='_blanc'/>
      </div>

      <div className='appLR'>
          <a 
          className='w-24 text-xl bg-gray-800 hover:bg-green-800 text-white font-semiboid py-3 border border-4 border-green-800 hover:border-gray-800 rounded shadow'
          href="https://github.com/Y-Watanabe-Eng/aws_infra/"
          target='_blanc'
          ><img src={Github} alt="Github" />More...</a>
      </div>

    </div>
  )
}