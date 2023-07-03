import React from 'react';
import '../../components/Range/style.css'
import {getTrackBackground, Range} from "react-range";

const PriceRange = ({filter, setFilterHandler, values, setValues,}) => {

    const handleRangeChange = async (newValues) => {
        const range = {
            min: newValues[0],
            max: newValues[1],
        }
        setValues(newValues);
        setFilterHandler({...filter, range});
    }

    return (
        <div
            className="items-center justify-center xl:flex lg:flex md:flex sm:flex hidden   flex-col mt-[2rem] ">
            <Range
                values={values}
                step={1}
                min={0}
                max={20}
                onChange={(newValues) => handleRangeChange(newValues)}
                renderTrack={({props, children}) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        onMouseUpCapture={(newValues) => handleRangeChange(newValues)}
                        style={{
                            ...props.style,
                            height: "6px",
                            display: "flex",
                            width: "137px",
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: "6px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                    values,
                                    colors: ["#ccc", "#548BF4", "#ccc"],
                                    min: 0,
                                    max: 20,
                                }),
                                alignSelf: "center",
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({props}) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "16px",
                            width: "16px",
                            borderRadius: "50%",
                            backgroundColor: "#FFF",
                            boxShadow: "0px 2px 6px #AAA",
                        }}
                    />
                )}
            />
            <div className="mt-[1rem] flex w-[200px] items-center justify-evenly">
                <div>{`${values[0]}$`}</div>
                <div>{`${values[1]}$`}</div>
            </div>
        </div>
    );
};


export default PriceRange;