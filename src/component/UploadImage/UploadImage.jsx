import React from "react";
import * as Styled from "./UploadImage.styled";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { createPicture } from "../../graphql/mutations";
import awsExports from "../../aws-exports";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  addImageToDB = async (image) => {
    console.log("addimage to db");
    try {
      await API.graphql(graphqlOperation(createPicture, { input: image }));
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  onChange(e) {
    const file = e.target.files[0];
    Storage.put(file.name, file, {
      contentType: "image/png",
    }).then(() => {
      this.setState({ file: URL.createObjectURL(file) });

      const image = {
        name: file.name,
        file: {
          bucket: awsExports.aws_user_files_s3_bucket,
          region: awsExports.aws_user_files_s3_bucket_region,
          key: file.name,
        },
      };

      this.addImageToDB(image);
    });
  }

  render() {
    return (
      <Styled.Upload>
        <h3>Please select an image to upload</h3>
        <input
          type="file"
          accept="image/*"
          onChange={(evt) => this.onChange(evt)}
        />
      </Styled.Upload>
    );
  }
}

export default UploadImage;
