import { useState } from "react";
import { Input } from "./input";
import { Slider } from "./slider";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import { Label } from "./label";

type PlaygroundProps = {
    value?: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Playground = ({ value = '', setValue }: PlaygroundProps): JSX.Element => {
    const [fontSize, setFontSize] = useState<number[]>([11]);
    const [fontVariant, setFontVariant] = useState<string>('single');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };


    const handleSliderChange = (e: number[]) => { setFontSize(e) }

    return (
        <div dir="rtl" className="h-[100%] w-full text-white border-[1px] overflow-hidden">
            <div className="p-8 w-full h-[10%] border-b-[1px] flex items-center gap-16 justify-between space-between">
                <Input
                    value={value}
                    onChange={handleInputChange}
                    className="bg-black"
                    placeholder="הקלד כאן"
                />
                <div className="w-full flex flex-row-reverse gap-4">
                    <Slider
                        min={5}
                        max={16}
                        value={fontSize}
                        onValueChange={handleSliderChange}
                    />
                    <Label className="w-[1rem]">{fontSize}</Label>
                </div>
                <ToggleGroup onValueChange={(val:string) => {setFontVariant(val)}} dir="rtl" defaultValue="normal" type="single">
                    <ToggleGroupItem value="single" aria-label="Toggle Normal">
                        <span>
                            רגיל
                        </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="double" aria-label="Toggle Double">
                        <span>
                            מוכפל
                        </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="triple" aria-label="Toggle Quad">
                        <span>
                            מרובע
                        </span>
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            <div className="w-full h-[74.58%] flex items-center justify-center">
                <div className="h-full w-full flex items-center justify-center overflow-hidden">
                    <span
                        className={`leading-none shtark-1906-${fontVariant}`}
                        dir="rtl"
                        style={{
                            fontSize: `${fontSize}rem`,
                        }}
                    > {value}
                    </span>
                </div>
            </div>
        </div>
    );
};
