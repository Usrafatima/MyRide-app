import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col items-center px-4">
      {/* Wrapper to control max width & responsiveness */}
      <div className="w-full max-w-4xl">
        {/* Question 1 */}
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger className="border-2 w-full h-[68px] bg-[#383838] border-[#383838] px-5 text-left">
            How can I pay?
          </AccordionTrigger>
          <AccordionContent className="w-full px-5 mt-2">
            You can pay via credit/debit cards (Visa, MasterCard, American Express) and digital wallets like Google Pay & Apple Pay. Some locations also accept cash. You can also use MyRide Points for discounts.
          </AccordionContent>
        </AccordionItem>

        {/* Question 2 */}
        <AccordionItem value="item-2" className="w-full">
          <AccordionTrigger className="border-2 w-full h-[68px] bg-[#383838] border-[#383838] px-5 text-left">
            How to earn and use MyRide Points?
          </AccordionTrigger>
          <AccordionContent className="w-full px-5 mt-2">
            Earn points on every ride—higher-tier rides earn more. Redeem points for discounts within the MyRide app.
          </AccordionContent>
        </AccordionItem>

        {/* Question 3 */}
        <AccordionItem value="item-3" className="w-full">
          <AccordionTrigger className="border-2 w-full h-[68px] bg-[#383838] border-[#383838] px-5 text-left">
            How to earn incentives by driving with MyRide?
          </AccordionTrigger>
          <AccordionContent className="w-full px-5 mt-2">
            Earn bonuses by completing more rides, especially during peak hours. Maintaining a high rating (4.8+) and referring drivers also boosts incentives.
          </AccordionContent>
        </AccordionItem>

        {/* Question 4 */}
        <AccordionItem value="item-4" className="w-full">
          <AccordionTrigger className="border-2 w-full h-[68px] bg-[#383838] border-[#383838] px-5 text-left">
            How to contact MyRide if I have any problems?
          </AccordionTrigger>
          <AccordionContent className="w-full px-5 mt-2">
            Contact support via 24/7 live chat in the app, email at support@myride.com, or call +1-800-MYRIDE.
          </AccordionContent>
        </AccordionItem>

        {/* Question 5 */}
        <AccordionItem value="item-5" className="w-full">
          <AccordionTrigger className="border-2 w-full h-[68px] bg-[#383838] border-[#383838] px-5 text-left">
            What is the status of my application as a driver?
          </AccordionTrigger>
          <AccordionContent className="w-full px-5 mt-2">
            Check your status in the MyRide app. The review process takes 3-5 days. If no update, email support@myride.com.
          </AccordionContent>
        </AccordionItem>
      </div>
    </Accordion>
  );
}
