import {FC} from "react";

interface Props {
    title: string;
};

const SectionTitle: FC<Props> = ({title}) => {
    return (
        <span className="text-sm">{title}</span>
    );
}
export default SectionTitle