import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

const ButtonFlow = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <ButtonPrimary text="提交" onClick={props["handleSave"]} />
            {parseInt(props["id"], 10) > 0 && (
                <>
                    <ButtonPrimary
                        text="技术员审核"
                        onClick={() =>
                            (window.location.href = `/document/${props["id"]}/${props["title"]}/approve/pjsy`)
                        }
                    />
                    <ButtonPrimary text="调度审核" onClick={() => alert("调度审核")} />
                    <ButtonPrimary text="班组签字" onClick={() => alert("班组签字")} />
                    <ButtonPrimary
                        text="作业负责人销记"
                        onClick={() => navigate(`/document/${props.id}/${props.title}/review`)}
                    />
                    <ButtonPrimary
                        text="监控班组签字"
                        onClick={() => window.alert("监控班组签字")}
                    />
                    <ButtonPrimary text="工长签字" onClick={() => window.alert("工长签字")} />
                    <ButtonPrimary text="质检签字" onClick={() => window.alert("质检签字")} />
                    <ButtonPrimary
                        text="值班干部签字"
                        onClick={() => window.alert("值班干部签字")}
                    />
                </>
            )}
        </div>
    );
};

ButtonFlow.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    handleSave: PropTypes.func,
};

export default ButtonFlow;
