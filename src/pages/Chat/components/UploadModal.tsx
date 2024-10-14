// component : 채팅 파일업로드 //

import React from "react";
import { FileText, Image, Mic, X } from "lucide-react";
import * as styles from "./UploadModal.css";

interface UploadModalProps {
  isVisible: boolean;
  onClose: () => void;
  onOptionSelect: (option: string) => void;
}
const UploadModal: React.FC<UploadModalProps> = ({
  isVisible,
  onClose,
  onOptionSelect,
}) => {
  if (!isVisible) return null;

  const options = [
    { icon: <FileText size={24} />, id: "파일", label: "파일", action: "file" },
    {
      icon: <Image size={24} />,
      id: "이미지",
      label: "이미지",
      action: "image",
    },
    { icon: <Mic size={24} />, id: "음성", label: "음성", action: "audio" },
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.optionsContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        {options.map((option) => (
          <button
            key={option.id}
            className={styles.optionButton}
            onClick={() => onOptionSelect(option.action)}
          >
            <div className={styles.optionIcon}>{option.icon}</div>
            <span className={styles.optionLabel}>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UploadModal;
