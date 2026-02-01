export default function GuaranteeBox() {
  return (
    <div className="mx-auto w-full max-w-full overflow-hidden flex flex-col gap-[30px] rounded-[30px] border border-[#2D3233] p-[12px] md:p-[20px] mb-[50px] mt-[22px] md:mt-[66px]">
      <div className="flex justify-center lg:justify-start">
        <span className="text-[16px] md:text-[18px] lg:text-[28px] font-normal text-[#81FE95] border border-[#81FE95] rounded-[30px] px-[18px] md:px-[30px] py-[10px]">
          гарантия возврата 30 дней
        </span>
      </div>
      <p className="text-[13px] sm:text-[14px] lg:text-[24px] wrap-break-word">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые
        результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
        деньги в течение 30 дней с момента покупки, если ты не получишь видимых
        результатов.
      </p>
    </div>
  );
}
