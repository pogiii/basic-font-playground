import { useState } from "react";
import { Input } from "./input";
import { Slider } from "./slider";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import { Label } from "./label";
import { Button } from "./button";

type PlaygroundProps = {
    value?: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Playground = ({ value = '', setValue }: PlaygroundProps): JSX.Element => {
    const [fontSize, setFontSize] = useState<number[]>([70]);
    const [fontVariant, setFontVariant] = useState<string>('double');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };


    const handleSliderChange = (e: number[]) => { setFontSize(e) }

    return (
        <div dir="rtl" className="h-[100%] w-full text-white overflow-hidden">
            <div className="p-8 w-full h-[10%] flex items-center gap-16 justify-between space-between">
                <Input
                    value={value}
                    onChange={handleInputChange}
                    className="bg-black"
                    placeholder="הקלד כאן"
                />
                <div className="w-full flex flex-row-reverse gap-4">
                    <Slider
                        min={60}
                        max={220}
                        value={fontSize}
                        onValueChange={handleSliderChange}
                    />
                    <Label className="w-[1rem] ml-[26px]">{fontSize}pt</Label>
                </div>
                <ToggleGroup onValueChange={(val: string) => { setFontVariant(val) }} dir="rtl" defaultValue="double" type="single">
                    <ToggleGroupItem className="pr-[32px] pl-[32px] pt-[2px] pb-[2px]" value="double" aria-label="Toggle Double">
                        <span>
                            יחיד
                        </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="pr-[32px] pl-[32px] pt-[2px] pb-[2px]" value="triple" aria-label="Toggle Quad">
                        <span>
                            כפול
                        </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="pr-[32px] pl-[32px] pt-[2px] pb-[2px]" value="tile" aria-label="Toggle Ariach">
                        <span>
                            אריח
                        </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="pr-[32px] pl-[32px] pt-[2px] pb-[2px]" value="square" aria-label="Toggle Framed">
                        <span>
                            ממוסגר
                        </span>
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            <div className="w-full h-[80%] bg-[#EEE7E1] flex items-center justify-center">
                <div className="h-full w-full flex text-black items-center justify-center overflow-hidden text-wrap">
                    <span
                        className={`leading-none w-[90%] transition-all-15 text-center shtark-1906-${fontVariant}`}
                        dir="rtl"
                        style={{
                            fontSize: `${fontSize}pt`,
                        }}
                    > {value}
                    </span>
                </div>
            </div>
            <div className="w-full h-[10%] items-center p-8 flex">
                <a href="https://www.figma.com/proto/b5uT7QWhcOMx9Hm7THbGFx/Shtark-Otnamental?node-id=277-362&t=bMAHwZ5475JxglFp-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=277%3A362">
                    <Button variant={"secondary"}>חזרה לאתר</Button>
                </a>
            </div>
        </div>
    );
};
